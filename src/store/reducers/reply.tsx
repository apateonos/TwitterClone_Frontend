import { GET_THIS_TWEET_REPLY_LIST, POST_THIS_TWEET_REPLY, UPDATE_THIS_TWEET_REPLY, DELETE_THIS_TWEET_REPLY } from '../actions/types';

const initialState = {
  replys: [],
  payload: [],
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_THIS_TWEET_REPLY_LIST['REQUEST']:
    case POST_THIS_TWEET_REPLY['REQUEST']:
    case UPDATE_THIS_TWEET_REPLY['REQUEST']:
    case DELETE_THIS_TWEET_REPLY['REQUEST']:
      return { ...state };
    case GET_THIS_TWEET_REPLY_LIST['SUCCESS']:
      return { 
        ...state,
        replys: payload,
      }
    case POST_THIS_TWEET_REPLY['SUCCESS']:
    case UPDATE_THIS_TWEET_REPLY['SUCCESS']:
    case DELETE_THIS_TWEET_REPLY['SUCCESS']:
      return {
        ...state,
        payload,
      };
    case GET_THIS_TWEET_REPLY_LIST['FAILURE']:
    case POST_THIS_TWEET_REPLY['FAILURE']:
    case UPDATE_THIS_TWEET_REPLY['FAILURE']:
    case DELETE_THIS_TWEET_REPLY['FAILURE']:
      return {
        ...state,
        error: payload,
      };
    default:
      return { ...state };
  }
}
