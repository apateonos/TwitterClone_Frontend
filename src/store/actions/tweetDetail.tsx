import { GetTweetDetailUseData } from '../../api/tweetDetail';
import { GET_TWEET_DETAIL } from '../actions/types';

export const getTweetDetailApi = {
  request: ({ tweetNumber }: GetTweetDetailUseData) => ({
    type: GET_TWEET_DETAIL['REQUEST'],
    tweetNumber
  }),
  success: (res: any) => ({
    type: GET_TWEET_DETAIL['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: GET_TWEET_DETAIL['FAILURE'],
    err: err.message,
  }),
};