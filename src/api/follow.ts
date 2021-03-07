import axios, { AxiosPromise } from 'axios';
import { get, post, del } from './service';

export interface FollowUserUseData {
  user_id: number
}

export interface GetFollowUserListUseData {
  id: number
}
export const getFollowUserList = ({ id }: GetFollowUserListUseData): AxiosPromise => {
  return get('/follow/user', { id })
}

export const postFollowUser = ({
  user_id
}: FollowUserUseData): AxiosPromise => {
  return post('/follow/subscribe', { user_id });
};

export const deleteFollowUser = ({
  user_id
}: FollowUserUseData): AxiosPromise => {
  return del('/unfollow', { user_id });
};