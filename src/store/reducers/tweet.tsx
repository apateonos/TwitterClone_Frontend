import { POST_TWEET, DELETE_TWEET, POST_RETWEET, DELETE_RETWEET, POST_HEART, DELETE_HEART } from '../actions/types';

const initialState = {
  res: {},
  error: ''
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case POST_TWEET['REQUEST']:
    case DELETE_TWEET['REQUEST']:
    case POST_RETWEET['REQUEST']:
    case DELETE_RETWEET['REQUEST']:
    case POST_HEART['REQUEST']:
    case DELETE_HEART['REQUEST']:
      return { ...state };

    case POST_TWEET['REQUEST']:
    case DELETE_TWEET['REQUEST']:
    case POST_RETWEET['REQUEST']:
    case DELETE_RETWEET['REQUEST']:
    case POST_HEART['REQUEST']:
    case DELETE_HEART['REQUEST']:
      return {
        ...state,
        res: payload.result
      };

    case POST_TWEET['REQUEST']:
    case DELETE_TWEET['REQUEST']:
    case POST_RETWEET['REQUEST']:
    case DELETE_RETWEET['REQUEST']:
    case POST_HEART['REQUEST']:
    case DELETE_HEART['REQUEST']:
      return {
        ...state,
        error: payload.data
      };

    default:
      return { ...state };
  }
}
