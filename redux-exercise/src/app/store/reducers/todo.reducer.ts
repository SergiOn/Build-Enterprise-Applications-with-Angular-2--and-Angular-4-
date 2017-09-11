import { fromJS, List, Map } from 'immutable';
import { ITodo } from '../../models/todo';
import { _ON_NEXT } from '../actions/constants';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODOS, FETCH_TODOS, REMOVE_TODO } from '../actions/todo.actions';

export interface ITodoState {
  todos: List<Map<string, ITodo>>;
  lastUpdate: Date | string | number;
  isFetching: boolean;
  error: string;
}

interface IAction {
  type: string;
  payload?: any;
  observable?: ITodoState;
  data?: {data: ITodoState};
}

type ITodoReducer<T> = (state: T, action: IAction) => T;

export const INITIAL_STATE_TODO: ITodoState = {
  todos: fromJS([]),
  lastUpdate: null,
  isFetching: false,
  error: null
};

export const todoReducer: ITodoReducer<ITodoState> = (state = INITIAL_STATE_TODO, action) => {
  // console.log(state);
  // console.log(action);

  switch (action.type) {

    case FETCH_TODOS: {
      return {...state, isFetching: true};
    }

    case FETCH_TODOS + _ON_NEXT: {
      const todos = fromJS(action.data.data);
      return {...state, isFetching: false, todos};
    }

    case ADD_TODO: {
      return {...state, isFetching: true};
    }

    case ADD_TODO + _ON_NEXT: {
      const todo = fromJS(action.data.data);
      return {...state, isFetching: false, lastUpdate: new Date(), todos: state.todos.push(todo)};
    }

    default: return state;
  }
};
