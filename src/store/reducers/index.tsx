import { combineReducers } from 'redux';
import userReducer from './user';
import tweetReducer from './tweet';
import timelineReducer from './timeline';
import detailReducer from './detail';
import profileReducer from './profile';
import modalReducer from './modal';
import searchReducer from './search';
import messageReducer from './message';
import followReducer from './follow';

export const rootReducer = combineReducers({
  userReducer,
  followReducer,
  tweetReducer,
  detailReducer,
  timelineReducer,
  profileReducer,
  modalReducer,
  searchReducer,
  messageReducer
});

export type State = ReturnType<typeof rootReducer>;