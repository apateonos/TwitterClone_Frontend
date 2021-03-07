import { 
  GET_THIS_TWEET_REPLY_LIST, 
  POST_THIS_TWEET_REPLY, 
  UPDATE_THIS_TWEET_REPLY, 
  DELETE_RETWEET_THIS_TWEET
} from './types';
import { 
  GetThisTweetReplyListUseData, 
  PostThisTweetReplyUseData, 
  UpdateThisTweetReplyUseData, 
  DeleteThisTweetReplyUseData 
} from '../../api/reply';

export const getThisTweetReplyListApi = {
  request: ({ tweet_id }: GetThisTweetReplyListUseData) => ({
    type: GET_THIS_TWEET_REPLY_LIST['REQUEST'],
    tweet_id
  }),
  success: (res: any) => ({
    type: GET_THIS_TWEET_REPLY_LIST['SUCCESS'],
    replys: res,
  }),
  failure: (err: Error) => ({
    type: GET_THIS_TWEET_REPLY_LIST['FAILURE'],
    err: err.message,
  }),
};

export const postThisTweetReplyApi = {
  request: ({ tweet_id, reply }: PostThisTweetReplyUseData) => ({
    type: POST_THIS_TWEET_REPLY['REQUEST'],
    tweet_id,
    reply,
  }),
  success: (res: any) => ({
    type: POST_THIS_TWEET_REPLY['SUCCESS'],
    replys: res,
  }),
  failure: (err: Error) => ({
    type: POST_THIS_TWEET_REPLY['FAILURE'],
    err: err.message,
  }),
};

export const updateThisTweetReplyApi = {
  request: ({ tweet_id, reply_id, reply }: UpdateThisTweetReplyUseData) => ({
    type: UPDATE_THIS_TWEET_REPLY['REQUEST'],
    tweet_id,
    reply_id,
    reply
  }),
  success: (res: any) => ({
    type: UPDATE_THIS_TWEET_REPLY['SUCCESS'],
    replys: res,
  }),
  failure: (err: Error) => ({
    type: UPDATE_THIS_TWEET_REPLY['FAILURE'],
    err: err.message,
  }),
};

export const deleteThisTweetReplyApi = {
  request: ({ tweet_id, reply_id }: DeleteThisTweetReplyUseData) => ({
    type: DELETE_RETWEET_THIS_TWEET['REQUEST'],
    tweet_id,
    reply_id
  }),
  success: (res: any) => ({
    type: DELETE_RETWEET_THIS_TWEET['SUCCESS'],
    replys: res,
  }),
  failure: (err: Error) => ({
    type: DELETE_RETWEET_THIS_TWEET['FAILURE'],
    err: err.message,
  }),
};