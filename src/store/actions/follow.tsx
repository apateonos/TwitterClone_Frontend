import { POST_FOLLOW_USER, DELETE_FOLLOW_USER } from '../actions/types';
import { FollowUseData } from '../../api/follow';

export const postFollowUserApi = {
  request: ({ follower_id }: FollowUseData) => ({
    type: POST_FOLLOW_USER['REQUEST'],
    follower_id
  }),
  success: (res: any) => ({
    type: POST_FOLLOW_USER['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: POST_FOLLOW_USER['FAILURE'],
    err: err.message,
  }),
};

export const deleteFollowUserApi = {
  request: ({ follower_id }: FollowUseData) => ({
    type: DELETE_FOLLOW_USER['REQUEST'],
    follower_id
  }),
  success: (res: any) => ({
    type: DELETE_FOLLOW_USER['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: DELETE_FOLLOW_USER['FAILURE'],
    err: err.message,
  }),
};