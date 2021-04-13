import { POST_USER_TWEET, UPDATE_USER_TWEET, DELETE_USER_TWEET } from '../actions/types';

const initialState = {
  res: [],
  error: ''
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case POST_USER_TWEET['REQUEST']:
    case UPDATE_USER_TWEET['REQUEST']:
    case DELETE_USER_TWEET['REQUEST']:
      return { ...state };

    case POST_USER_TWEET['SUCCESS']:
    case UPDATE_USER_TWEET['SUCCESS']:
    case DELETE_USER_TWEET['SUCCESS']:
      return {
        ...state,
        res: payload.result
      };

    case POST_USER_TWEET['FAILURE']:
    case UPDATE_USER_TWEET['FAILURE']:
    case DELETE_USER_TWEET['FAILURE']:
      return {
        ...state,
        error: payload.data
      };

    default:
      return { ...state };
  }
}
