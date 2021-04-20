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

//user
export const GET_TOKEN_FROM_REFRESH = createRequestTypes('GET_TOKEN_FROM_REFRESH');
export const LOGIN_USER_ACCOUNT = createRequestTypes('LOGIN_USER_ACCOUNT');
export const CREATE_USER_ACCOUNT = createRequestTypes('CREATE_USER_ACCOUNT');
export const EDIT_USER_ACCOUNT = createRequestTypes('EDIT_USER_ACCOUNT');
export const LOGOUT_USER_ACCOUNT = createRequestTypes('LOGOUT_USER_ACCOUNT');
export const DELETE_USER_ACCOUNT = createRequestTypes('DELETE_USER_ACCOUNT');
export const POST_FOLLOW_USER = createRequestTypes('POST_USER_FOLLOW');
export const DELETE_FOLLOW_USER = createRequestTypes('DELETE_USER_FOLLOW');

//tweet
export const POST_TWEET = createRequestTypes('POST_TWEET');
export const DELETE_TWEET = createRequestTypes('DELETE_TWEET');
export const POST_RETWEET = createRequestTypes('POST_RETWEET');
export const DELETE_RETWEET = createRequestTypes('DELETE_RETWEET');
export const POST_HEART = createRequestTypes('POST_HEART');
export const DELETE_HEART = createRequestTypes('DELETE_HEART');

//timeLine
export const GET_USER_TIMELINE = createRequestTypes('GET_USER_TIMELINE');

//profile
export const GET_USER_PROFILE = createRequestTypes('GET_USER_PROFILE');

//detail
export const GET_DETAIL_TWEET = createRequestTypes('GET_DETAIL_TWEET');

//explore
export const GET_SEARCH_BY_KEYWORD = createRequestTypes('GET_SEARCH_BY_KEYWORD');

//message
export const GET_MESSAGE_LIST = createRequestTypes('GET_MESSAGE_LIST');

//socket
export const CREATE_ROOM = createRequestTypes('CREATE_ROOM');
export const SEND_MESSAGE = createRequestTypes('SEND_MESSAGE');
export const LEAVE_ROOM = createRequestTypes('LEAVE_ROOM');
