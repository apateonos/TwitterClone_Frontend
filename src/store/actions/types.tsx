export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

interface Indexable {
  [key: string]: string;
}

export function createRequestTypes(base: string): Indexable {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: Indexable, type: string) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

//home
export const GET_USER_TIMELINE = createRequestTypes('GET_USER_TIMELINE');

//tweet
export const POST_NEW_TWEET = createRequestTypes('POST_NEW_TWEET');
export const UPDATE_TWEET = createRequestTypes('UPDATE_TWEET');
export const DELETE_TWEET = createRequestTypes('DELETE_TWEET');
export const POST_NEW_REPLY = createRequestTypes('POST_NEW_REPLY');
export const POST_RETWEET = createRequestTypes('POST_RETWEET');

//user
export const POST_CREATE_ACCOUNT = createRequestTypes('POST_CREATE_ACCOUNT');
export const POST_LOGIN_ACCOUNT = createRequestTypes('POST_LOGIN_ACCOUNT');
export const POST_USER_FOLLOW = createRequestTypes('POST_USER_FOLLOW');
export const DELETE_USER_FOLLOW = createRequestTypes('DELETE_USER_FOLLOW');

//profile
export const GET_USER_TWEETS_LIST = createRequestTypes('GET_USER_TWEETS_LIST')