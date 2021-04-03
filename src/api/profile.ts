import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetUserProfileUseData {
  userUniqueName: string;
}
export const getUserProfile = ({
  userUniqueName
}: GetUserProfileUseData): AxiosPromise => {
  return get('/profile', { userUniqueName })
}

export interface GetMoreUserTweetUseData{
  userUniqueName: string;
  pickupCount: number;
}
export const getMoreUserTweet = ({
  userUniqueName, pickupCount
}: GetMoreUserTweetUseData): AxiosPromise => {
  return get('/profile/tweet', { userUniqueName, pickupCount })
}