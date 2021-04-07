import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetUserProfileUseData {
  userUniqueName: string;
}
export const getUserProfile = ({
  userUniqueName
}: GetUserProfileUseData): AxiosPromise => {
  console.log(userUniqueName);
  return get('profile', { userUniqueName })
}