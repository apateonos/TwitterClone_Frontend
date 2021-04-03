import axios, { AxiosPromise } from 'axios';
import { get, post, del } from './service';

export interface FollowUseData {
  userNumber: number
}

export const getFollowUserList = (): AxiosPromise => {
  return get('/follow/user');
}

export const postFollowUser = ({
  userNumber
}: FollowUseData): AxiosPromise => {
  return post('/follow/post', { userNumber });
};

export const deleteFollowUser = ({
  userNumber
}: FollowUseData): AxiosPromise => {
  return del('/unfollow/del', { userNumber });
};