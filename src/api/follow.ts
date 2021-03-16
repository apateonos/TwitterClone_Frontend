import axios, { AxiosPromise } from 'axios';
import { get, post, del } from './service';

export interface FollowUserUseData {
  userNumber: number
}

export interface GetFollowUserListUseData {
  userNumber: number
}
export const getFollowUserList = ({ userNumber }: GetFollowUserListUseData): AxiosPromise => {
  return get('/follow/user', { userNumber })
}

export const postFollowUser = ({
  userNumber
}: FollowUserUseData): AxiosPromise => {
  return post('/follow/post', { userNumber });
};

export const deleteFollowUser = ({
  userNumber
}: FollowUserUseData): AxiosPromise => {
  return del('/unfollow/del', { userNumber });
};