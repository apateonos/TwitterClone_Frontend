import { GET_USER_TWEET_LIST, POST_USER_TWEET, UPDATE_USER_TWEET, DELETE_USER_TWEET } from './types';
import { GetUserTweetListUseData, PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData } from '../../api/tweet';

export const getUserTweetListApi = {
  request: ({ userUniqueName }: GetUserTweetListUseData) => ({
    type: GET_USER_TWEET_LIST['REQUEST'],
    userUniqueName
  }),
  success: (res: any) => ({
    type: GET_USER_TWEET_LIST['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: GET_USER_TWEET_LIST['FAILURE'],
    err: err.message,
  }),
};

export const postUserTweetApi = {
  request: ({ tweetContent, tweetImage, replyTweetNumber, retweetNumber }: PostUserTweetUseData) => ({
    type: POST_USER_TWEET['REQUEST'],
    tweetContent,
    tweetImage,
    replyTweetNumber,
    retweetNumber
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
  request: ({ tweetNumber, tweetContent, tweetImage }: UpdateUserTweetUseData) => ({
    type: UPDATE_USER_TWEET['REQUEST'],
    tweetNumber,
    tweetContent,
    tweetImage
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
  request: ({ tweetNumber }: DeleteUserTweetUseData) => ({
    type: DELETE_USER_TWEET['REQUEST'],
    tweetNumber
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
