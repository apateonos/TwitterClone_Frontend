import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetUserProfileUseData {
  unique_name: string;
};
export const getUserProfile = ({
  unique_name
}: GetUserProfileUseData): AxiosPromise => {
  return get('profile', { unique_name })
};