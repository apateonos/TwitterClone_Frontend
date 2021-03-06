import { combineReducers } from 'redux';
import userReducer from './user';

export const rootReducer = combineReducers({
  userReducer
});

export type State = ReturnType<typeof rootReducer>;