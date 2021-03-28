import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetTweetDetailUseData {
  tweetNumber: number;
}
export const getTweetDetail = ({
  tweetNumber
}: GetTweetDetailUseData): AxiosPromise => {
  return get('/tweet/detail', { tweetNumber })
}