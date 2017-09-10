import { combineReducers } from 'redux';
import { todoReducer, ITodoState, INITIAL_STATE_TODO } from './store/reducers';

export interface IAppState {
  todo?: ITodoState;
}

export const INITIAL_STATE = {
  todo: INITIAL_STATE_TODO
};

export const rootReducer = combineReducers({
  todo: todoReducer
});
