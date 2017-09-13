import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

describe('UsersComponent', () => {

  beforeEach(() => {});

  it('should set users property with the users retrieved from the server', () => {});

  describe('When deleting a user', () => {

    beforeEach(() => {});

    it('should remove the selected user from the list if the user confirms deletion', () => {});

    it('should NOT remove the seleted user from the list if the user cancels', () => {});

    it('should call the server to delete the selected user if the user confirms deletion', () => {});

    it('should NOT call the server to delete the selected user if the user cancels', () => {});

    it('should undo deletion if the call to the server fails', () => {});

    it('should display an error if the call to the server fails', () => {});
  });
});
