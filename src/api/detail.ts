import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetDetailTweetUseData {
  tweet_id: number;
};
export const getDetailTweet = (data: GetDetailTweetUseData): AxiosPromise => {
  return get('detail', data);
};