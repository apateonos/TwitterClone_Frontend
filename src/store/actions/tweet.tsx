import { GET_USER_TWEET_LIST, POST_USER_TWEET, UPDATE_USER_TWEET, DELETE_USER_TWEET  } from './types';
import { GetUserTweetListUseData, PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData } from '../../api/tweet';

export const getUserTweetListApi = {
  request: ({ user_id }: GetUserTweetListUseData) => ({
    type: GET_USER_TWEET_LIST['REQUEST'],
    user_id
  }),
  success: (res: any) => ({
    type: GET_USER_TWEET_LIST['SUCCESS'],
    tweetList: res,
  }),
  failure: (err: Error) => ({
    type: GET_USER_TWEET_LIST['FAILURE'],
    err: err.message,
  }),
};

export const postUserTweetApi = {
  request: ({ tweet }: PostUserTweetUseData) => ({
    type: POST_USER_TWEET['REQUEST'],
    tweet
  }),
  success: (res: any) => ({
    type: POST_USER_TWEET['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: POST_USER_TWEET['FAILURE'],
    err: err.message,
  }), 
};

export const updateUserTweetApi = {
  request: ({ tweet_id, tweet }: UpdateUserTweetUseData) => ({
    type: UPDATE_USER_TWEET['REQUEST'],
    tweet_id,
    tweet
  }),
  success: (res: any) => ({
    type: UPDATE_USER_TWEET['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: UPDATE_USER_TWEET['FAILURE'],
    err: err.message,
  }), 
};

export const deleteUserTweetApi = {
  request: ({ tweet_id }: DeleteUserTweetUseData) => ({
    type: DELETE_USER_TWEET['REQUEST'],
    tweet_id
  }),
  success: (res: any) => ({
    type: DELETE_USER_TWEET['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: DELETE_USER_TWEET['FAILURE'],
    err: err.message,
  }), 
};
