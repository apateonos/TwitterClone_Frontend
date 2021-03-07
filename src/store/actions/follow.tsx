import { GET_FOLLOW_USER_LIST, POST_FOLLOW_USER, DELETE_FOLLOW_USER } from './types';
import { FollowUserUseData, GetFollowUserListUseData } from '../../api/follow';

export const getFollowUserListApi = {
  request: ({ id }: GetFollowUserListUseData) => ({
    type: GET_FOLLOW_USER_LIST['REQUEST']
  }),
  success: (res: any) => ({
    type: GET_FOLLOW_USER_LIST['SUCCESS'],
    replys: res,
  }),
  failure: (err: Error) => ({
    type: GET_FOLLOW_USER_LIST['FAILURE'],
    err: err.message,
  }),
};

export const postFollowUserApi = {
  request: ({ user_id }: FollowUserUseData) => ({
    type: POST_FOLLOW_USER['REQUEST'],
    user_id
  }),
  success: (res: any) => ({
    type: POST_FOLLOW_USER['SUCCESS'],
    replys: res,
  }),
  failure: (err: Error) => ({
    type: POST_FOLLOW_USER['FAILURE'],
    err: err.message,
  }),
};

export const deleteFollowUserApi = {
  request: ({ user_id }: FollowUserUseData) => ({
    type: DELETE_FOLLOW_USER['REQUEST'],
    user_id
  }),
  success: (res: any) => ({
    type: DELETE_FOLLOW_USER['SUCCESS'],
    replys: res,
  }),
  failure: (err: Error) => ({
    type: DELETE_FOLLOW_USER['FAILURE'],
    err: err.message,
  }),
};