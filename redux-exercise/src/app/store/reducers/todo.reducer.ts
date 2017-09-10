import { List, Map } from 'immutable';
import { ITodo } from '../../models/todo';

export interface ITodoState {
  todos: Map<string, List<ITodo>>;
  date: Date | string | number;
  isFetching: boolean;
}

interface IAction {
  type: string;
  payload: ITodoState;
}

type ITodoReducer<T>  = (state: T, action: IAction) => T;

export const INITIAL_STATE_TODO: ITodoState = {
  todos: null,
  date: null,
  isFetching: false
};

export const todoReducer: ITodoReducer<ITodoState> = (state = INITIAL_STATE_TODO, action) => {

  console.log(state);
  console.log(action);

  return state;
};
