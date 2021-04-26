import { GetDetailTweetUseData } from '../../api/detail';
import { GET_DETAIL_TWEET } from './types';

export const getDetailTweetApi = {
  request: ({ tweet_id }: GetDetailTweetUseData) => ({
    type: GET_DETAIL_TWEET['REQUEST'],
    tweet_id
  }),
  success: (res: any) => ({
    type: GET_DETAIL_TWEET['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: GET_DETAIL_TWEET['FAILURE'],
    err: err.message,
  }),
};