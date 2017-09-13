import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with items return from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => Observable.from([ [1, 2, 3] ]));
    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(3);
    expect(component.todos).toEqual([1, 2, 3]);
  });

  it('should call the server to save the changes when a new todo item is added', () => {
    const spy = spyOn(service, 'addTodo').and.callFake((t) => Observable.empty());
    component.addTodo();

    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo returned from the server', () => {
    const todo = {id: 1};
    const spy = spyOn(service, 'addTodo').and.returnValue(Observable.from([ todo ]));
    component.addTodo();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returns an error when adding a new todo', () => {
    const error = 'error from the server';
    const spy = spyOn(service, 'addTodo').and.returnValue(Observable.throw(error));
    component.addTodo();

    expect(component.message).toBe(error);
  });
});
