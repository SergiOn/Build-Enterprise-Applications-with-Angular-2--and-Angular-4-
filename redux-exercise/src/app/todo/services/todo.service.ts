import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

import { ITodo } from '../../models/todo';
import { IAppState } from '../../root.reducer';
import { FETCH_TODOS, ADD_TODO } from '../../store/actions/todo.actions';

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
    const observable = this.http.post(this.url, {...todo});

    this.ngRedux.dispatch({
      type: ADD_TODO,
      observable
    });
  }

}
