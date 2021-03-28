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

//ping
//export const GET_PING = createRequestTypes('GET_PING');

//user
export const LOGIN_USER_ACCOUNT = createRequestTypes('LOGIN_USER_ACCOUNT');
export const CREATE_USER_ACCOUNT = createRequestTypes('CREATE_USER_ACCOUNT');
export const CHANGE_USER_NAME = createRequestTypes('CHANGE_USER_NAME');
//export const CHANGE_USER_PASSWORD = createRequestTypes('CHANGE_USER_PASSWORD');
export const DELETE_USER_ACCOUNT = createRequestTypes('DELETE_USER_ACCOUNT');
export const GET_USER_PROFILE = createRequestTypes('GET_USER_PROFILE');
export const GET_USER_TOKEN_FROM_REFRESH = createRequestTypes('GET_USER_TOKEN_FROM_REFRESH');

//follow
export const GET_FOLLOW_USER_LIST = createRequestTypes('GET_USER_FOLLOW_LIST');
export const POST_FOLLOW_USER = createRequestTypes('POST_USER_FOLLOW');
export const DELETE_FOLLOW_USER = createRequestTypes('DELETE_USER_FOLLOW');

//timeLine
export const GET_USER_TIMELINE = createRequestTypes('GET_USER_TIMELINE');

//tweet
export const GET_USER_TWEET_LIST = createRequestTypes('GET_USER_TWEETS_LIST');
export const POST_USER_TWEET = createRequestTypes('POST_USER_TWEET');
export const UPDATE_USER_TWEET = createRequestTypes('UPDATE_USER_TWEET');
export const DELETE_USER_TWEET = createRequestTypes('DELETE_USER_TWEET');

//tweet
export const GET_TWEET_DETAIL = createRequestTypes('GET_TWEET_DETAIL');

//retweet
export const POST_RETWEET_THIS_TWEET = createRequestTypes('POST_RETWEET_THIS_TWEET');
export const DELETE_RETWEET_THIS_TWEET = createRequestTypes('DELETE_RETWEET_THIS_TWEET');

//reply
export const GET_THIS_TWEET_REPLY_LIST  = createRequestTypes('GET_THIS_TWEET_REPLY_LIST');
export const GET_PRECEDENCE_REPLYED_TWEET_LIST = createRequestTypes('GET_PRECEDENCE_REPLYED_TWEET_LIST');