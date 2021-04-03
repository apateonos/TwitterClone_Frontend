import { POST_USER_TWEET, UPDATE_USER_TWEET, DELETE_USER_TWEET } from './types';
import { PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData } from '../../api/tweet';

export const postUserTweetApi = {
  request: ({ tweet, imageFile, replyNumber, retweetNumber }: PostUserTweetUseData) => ({
    type: POST_USER_TWEET['REQUEST'],
    tweet,
    imageFile,
    replyNumber,
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
  request: ({ tweetNumber, tweet, imageFile }: UpdateUserTweetUseData) => ({
    type: UPDATE_USER_TWEET['REQUEST'],
    tweetNumber,
    tweet,
    imageFile
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
