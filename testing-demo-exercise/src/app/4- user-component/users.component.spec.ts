import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('UsersComponent', () => {
  let sut: UsersComponent;
  let service: UserService;

  beforeEach(() => {
    service = new UserService(null);
    sut = new UsersComponent(service);
  });

  it('should set users property with the users retrieved from the server', () => {
    const users = [ 1, 2, 3 ];
    spyOn(service, 'getUsers').and.returnValue(Observable.from([ users ]));
    sut.ngOnInit();

    expect(sut.users).toBe(users);
  });

  describe('When deleting a user', () => {
    let user;

    beforeEach(() => {
      sut.users = [
        { id: 1 },
        { id: 2 },
      ];

      user = sut.users[0];
    });

    it('should remove the selected user from the list if the user confirms deletion', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      spyOn(service, 'deleteUser').and.returnValue(Observable.empty());
      sut.deleteUser(user);

      expect(sut.users.includes(user)).toBe(false);
    });

    it('should NOT remove the seleted user from the list if the user cancels', () => {
      spyOn(window, 'confirm').and.returnValue(false);
      spyOn(service, 'deleteUser').and.returnValue(Observable.empty());
      sut.deleteUser(user);

      expect(sut.users.includes(user)).toBe(true);
    });

    it('should call the server to delete the selected user if the user confirms deletion', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      const spy = spyOn(service, 'deleteUser').and.returnValue(Observable.empty());
      sut.deleteUser(user);

      expect(spy).toHaveBeenCalledWith(user.id);
      expect(service.deleteUser).toHaveBeenCalledWith(user.id);
    });

    it('should NOT call the server to delete the selected user if the user cancels', () => {
      spyOn(window, 'confirm').and.returnValue(false);
      const spy = spyOn(service, 'deleteUser').and.returnValue(Observable.empty());
      sut.deleteUser(user);

      expect(spy).not.toHaveBeenCalled();
      expect(service.deleteUser).not.toHaveBeenCalled();
    });

    it('should undo deletion if the call to the server fails', () => {
      spyOn(window, 'confirm').and.returnValue(false);
      spyOn(window, 'alert').and.callFake(() => {});
      spyOn(service, 'deleteUser').and.returnValue(Observable.throw('error'));
      sut.deleteUser(user);

      expect(sut.users.indexOf(user)).toBeGreaterThan(-1);
      expect(sut.users.includes(user)).toBe(true);
    });

    it('should display an error if the call to the server fails', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      const spy = spyOn(window, 'alert').and.callFake(() => {});
      spyOn(service, 'deleteUser').and.returnValue(Observable.throw('error'));
      sut.deleteUser(user);

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('Could not delete the user.');
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith('Could not delete the user.');
    });
  });
});
