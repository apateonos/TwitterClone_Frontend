import { combineReducers } from 'redux';
import userReducer from './user';
import tweetReducer from './tweet';
//import replyReducer from './reply';
import timelineReducer from './timeline';
//import pingReducer from './ping';
import tweetDetailReducer from './tweetDetail';

export const rootReducer = combineReducers({
  userReducer,
  tweetReducer,
  tweetDetailReducer,
  //replyReducer,
  timelineReducer,
});

export type State = ReturnType<typeof rootReducer>;