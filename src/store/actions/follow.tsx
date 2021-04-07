import { POST_FOLLOW_USER, DELETE_FOLLOW_USER } from './types';
import { FollowUseData } from '../../api/follow';

export const getFollowList = (res: any) => ({
  type: "GET_FOLLOW_LIST",
  payload: res,
})

export const postFollowUserApi = {
  request: ({ userNumber }: FollowUseData) => ({
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
  request: ({ userNumber }: FollowUseData) => ({
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