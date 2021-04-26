import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetUserProfileUseData {
  unique_name: string;
};
export const getUserProfile = (data: GetUserProfileUseData): AxiosPromise => {
  return get('profile', data);
};