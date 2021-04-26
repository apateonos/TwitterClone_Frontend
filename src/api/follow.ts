import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';

export interface FollowUseData {
  follower_id: number
}
export const postFollowUser = (data: FollowUseData): AxiosPromise => {
  return post('follow/post', data);
};

export const deleteFollowUser = (data: FollowUseData): AxiosPromise => {
  return del('follow/del', data);
};