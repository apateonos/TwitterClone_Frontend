import { combineReducers } from 'redux';
import userReducer from './user';
import tweetReducer from './tweet';
import timelineReducer from './timeline';
import detailReducer from './detail';
import profileReducer from './profile';
import modalReducer from './modal';
import followReducer from './follow';
import searchReducer from './search';

export const rootReducer = combineReducers({
  userReducer,
  tweetReducer,
  detailReducer,
  timelineReducer,
  profileReducer,
  modalReducer,
  followReducer,
  searchReducer
});

export type State = ReturnType<typeof rootReducer>;