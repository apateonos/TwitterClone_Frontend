import { POST_TWEET, DELETE_TWEET, POST_RETWEET, DELETE_RETWEET, POST_HEART, DELETE_HEART, LOGIN_USER_ACCOUNT } from '../actions/types';

interface TweetReducerUseData {
  retweets: []|Array<RetweetData>;
  hearts: []|Array<HeartData>;
  res: any;
  error: any;
}
const initialState: TweetReducerUseData = {
  retweets: [],
  hearts: [],
  res: {},
  error: ''
};

export interface RetweetData {
  tweet_id: number;
}

export interface HeartData {
  tweet_id: number;
}

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case LOGIN_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        retweets: payload.retweets,
        hearts: payload.hearts,
      }

    case POST_TWEET['REQUEST']:
    case DELETE_TWEET['REQUEST']:
    case POST_RETWEET['REQUEST']:
    case DELETE_RETWEET['REQUEST']:
    case POST_HEART['REQUEST']:
    case DELETE_HEART['REQUEST']:
      return { ...state };

    case POST_TWEET['SUCCESS']:
    case DELETE_TWEET['SUCCESS']:
      return {
        ...state,
        res: payload.result
      };
    
    case POST_RETWEET['SUCCESS']:
    case DELETE_RETWEET['SUCCESS']:
      return {
        ...state,
        res: payload.result,
        retweets: payload.retweets,
      }
    
    case POST_HEART['SUCCESS']:
    case DELETE_HEART['SUCCESS']:
      return {
        ...state,
        res: payload.result,
        hearts: payload.hearts,
      }
    case POST_TWEET['SUCCESS']:
    case DELETE_TWEET['SUCCESS']:
    case POST_RETWEET['SUCCESS']:
    case DELETE_RETWEET['SUCCESS']:
    case POST_HEART['SUCCESS']:
    case DELETE_HEART['SUCCESS']:
      return {
        ...state,
        error: payload.data
      };

    default:
      return { ...state };
  }
}
