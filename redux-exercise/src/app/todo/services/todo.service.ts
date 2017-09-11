import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import 'rxjs/add/operator/toPromise';

import { ITodo } from '../../models/todo';
import { IAppState } from '../../root.reducer';
import { FETCH_TODOS, ADD_TODO, REMOVE_TODO, COMPLETE_TODO, DELETE_TODOS } from '../../store/actions/todo.actions';
import { _ON_NEXT } from '../../store/actions/constants';

@Injectable()
export class TodoService {
  private readonly url: string = '/api/todos';

  constructor(
    private http: HttpClient,
    private ngRedux: NgRedux<IAppState>,
  ) {
    /*this.ngRedux.dispatch({
      type: 'ADD_TODO',
      payload: new Promise((res, rej) => setTimeout(() => res('ffdfd'), 2000))
    });

    this.ngRedux.dispatch({
      type: 'ADD_TODO',
      observable: Observable.of(1, 2)
    });*/
  }

  loadTodos() {
    const observable = this.http.get(this.url);

    this.ngRedux.dispatch({
      type: FETCH_TODOS,
      observable
    });
  }

  addTodo(todo: ITodo) {
    const observable = this.http.post(this.url, todo);

    this.ngRedux.dispatch({
      type: ADD_TODO,
      observable
    });
  }

  removeTodo(todo) {
    const url = `${this.url}/${todo.id}`;

    this.ngRedux.dispatch({
      type: REMOVE_TODO
    });

    this.http.delete(url).subscribe((r) => {
      this.ngRedux.dispatch({
        type: REMOVE_TODO + _ON_NEXT,
        payload: todo
      });
    });
  }

}
