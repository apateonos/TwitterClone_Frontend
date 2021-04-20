import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetDetailTweetUseData {
  tweet_id: number;
};
export const getDetailTweet = ({
  tweet_id
}: GetDetailTweetUseData): AxiosPromise => {
  return get('detail', { tweet_id })
};