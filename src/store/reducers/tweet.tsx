import { GET_USER_TWEET_LIST, POST_USER_TWEET, UPDATE_USER_TWEET, DELETE_USER_TWEET } from '../actions/types';

const initialState = {
  tweets: [],
  payload: []
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_USER_TWEET_LIST['REQUEST']:
    case POST_USER_TWEET['REQUEST']:
    case UPDATE_USER_TWEET['REQUEST']:
    case DELETE_USER_TWEET['REQUEST']:
      return { ...state };
    case GET_USER_TWEET_LIST['SUCCESS']:
      return { 
        ...state,
        tweets: payload,
      }
    case POST_USER_TWEET['SUCCESS']:
    case UPDATE_USER_TWEET['SUCCESS']:
    case DELETE_USER_TWEET['SUCCESS']:
      return {
        ...state,
        payload,
      };
    case GET_USER_TWEET_LIST['FAILURE']:
    case POST_USER_TWEET['FAILURE']:
    case UPDATE_USER_TWEET['FAILURE']:
    case DELETE_USER_TWEET['FAILURE']:
      return {
        ...state,
        error: payload,
      };
    default:
      return { ...state };
  }
}
