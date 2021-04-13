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
export const LOGIN_USER_ACCOUNT = createRequestTypes('LOGIN_USER_ACCOUNT');
export const CREATE_USER_ACCOUNT = createRequestTypes('CREATE_USER_ACCOUNT');
export const CHANGE_USER_INFORMATION = createRequestTypes('CHANGE_USER_INFORMATION');
export const LOGOUT_USER_ACCOUNT = createRequestTypes('LOGOUT_USER_ACCOUNT');
export const DELETE_USER_ACCOUNT = createRequestTypes('DELETE_USER_ACCOUNT');
export const GET_USER_TOKEN_FROM_REFRESH = createRequestTypes('GET_USER_TOKEN_FROM_REFRESH');

//follow
export const GET_FOLLOW_USER_LIST = createRequestTypes('GET_USER_FOLLOW_LIST');
export const POST_FOLLOW_USER = createRequestTypes('POST_USER_FOLLOW');
export const DELETE_FOLLOW_USER = createRequestTypes('DELETE_USER_FOLLOW');

//tweet
export const POST_USER_TWEET = createRequestTypes('POST_USER_TWEET');
export const UPDATE_USER_TWEET = createRequestTypes('UPDATE_USER_TWEET');
export const DELETE_USER_TWEET = createRequestTypes('DELETE_USER_TWEET');

//timeLine
export const GET_USER_TIMELINE = createRequestTypes('GET_USER_TIMELINE');

//profile
export const GET_USER_PROFILE = createRequestTypes('GET_USER_PROFILE');
export const GET_MORE_USER_TWEET = createRequestTypes('GET_MORE_USER_TWEET');

//detail
export const GET_DETAIL_TWEET = createRequestTypes('GET_DETAIL_TWEET');

//explore
export const GET_SEARCH_BY_KEYWORD = createRequestTypes('GET_SEARCH_BY_KEYWORD');

//socket
export const CREATE_ROOM = createRequestTypes('CREATE_ROOM');
export const SEND_MESSAGE = createRequestTypes('SEND_MESSAGE');
export const LEAVE_ROOM = createRequestTypes('LEAVE_ROOM');

//message
export const GET_MESSAGE_LIST = createRequestTypes('GET_MESSAGE_LIST')