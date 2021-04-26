import { POST_TWEET, DELETE_TWEET, POST_RETWEET, DELETE_RETWEET, POST_HEART, DELETE_HEART } from './types';
import { PostTweetUseData, DeleteTweetUseData, PostRetweetUseData, DeleteRetweetUseData, PostHeartUseData, DeleteHeartUseData } from '../../api/tweet';

export const postTweetApi = {
  request: ({ tweet_text, imageFile, reply_id }: PostTweetUseData) => ({
    type: POST_TWEET['REQUEST'],
    tweet_text,
    imageFile,
    reply_id,
  }),
  success: (res: any) => ({
    type: POST_TWEET['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: POST_TWEET['FAILURE'],
    payload: err,
  }), 
};

export const deleteTweetApi = {
  request: ({ tweet_id }: DeleteTweetUseData) => ({
    type: DELETE_TWEET['REQUEST'],
    tweet_id
  }),
  success: (res: any) => ({
    type: DELETE_TWEET['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: DELETE_TWEET['FAILURE'],
    payload: err,
  }), 
};

export const postRetweetApi = {
  request: ({ tweet_id }: PostRetweetUseData) => ({
    type: POST_RETWEET['REQUEST'],
    tweet_id
  }),
  success: (res: any) => ({
    type: POST_RETWEET['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: POST_RETWEET['FAILURE'],
    payload: err,
  }), 
};

export const deleteRetweetApi = {
  request: ({ tweet_id }: DeleteRetweetUseData) => ({
    type: DELETE_RETWEET['REQUEST'],
    tweet_id
  }),
  success: (res: any) => ({
    type: DELETE_RETWEET['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: DELETE_RETWEET['FAILURE'],
    payload: err,
  }), 
};

export const postHeartApi = {
  request: ({ tweet_id }: PostHeartUseData) => ({
    type: POST_HEART['REQUEST'],
    tweet_id
  }),
  success: (res: any) => ({
    type: POST_HEART['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: POST_HEART['FAILURE'],
    payload: err,
  }), 
};

export const deleteHeartApi = {
  request: ({ tweet_id }: DeleteHeartUseData) => ({
    type: DELETE_HEART['REQUEST'],
    tweet_id
  }),
  success: (res: any) => ({
    type: DELETE_HEART['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: DELETE_HEART['FAILURE'],
    payload: err,
  }), 
};