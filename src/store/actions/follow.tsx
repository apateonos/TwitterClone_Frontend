import { GET_FOLLOW_USER_LIST, POST_FOLLOW_USER, DELETE_FOLLOW_USER } from './types';
import { FollowUserUseData, GetFollowUserListUseData } from '../../api/follow';

export const getFollowUserListApi = {
  request: ({ userNumber }: GetFollowUserListUseData) => ({
    type: GET_FOLLOW_USER_LIST['REQUEST'],
    userNumber
  }),
  success: (res: any) => ({
    type: GET_FOLLOW_USER_LIST['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: GET_FOLLOW_USER_LIST['FAILURE'],
    err: err.message,
  }),
};

export const postFollowUserApi = {
  request: ({ userNumber }: FollowUserUseData) => ({
    type: POST_FOLLOW_USER['REQUEST'],
    userNumber
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
  request: ({ userNumber }: FollowUserUseData) => ({
    type: DELETE_FOLLOW_USER['REQUEST'],
    userNumber
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