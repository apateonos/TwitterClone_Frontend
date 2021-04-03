import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetDetailTweetUseData {
  tweetNumber: number;
}
export const getDetailTweet = ({
  tweetNumber
}: GetDetailTweetUseData): AxiosPromise => {
  return get('/detail', { tweetNumber })
}