import { CREATE_USER_ACCOUNT, LOGIN_USER_ACCOUNT, EDIT_USER_ACCOUNT, LOGOUT_USER_ACCOUNT, DELETE_USER_ACCOUNT, GET_TOKEN_FROM_REFRESH, POST_FOLLOW_USER, DELETE_FOLLOW_USER } from './types';
import { CreateUserAccountUseData, LoginUserAccountUseData, EditUserAccountUseData, DeleteUserAccountUseData, FollowUseData } from '../../api/user';

export const getTokenFromRefreshApi = {
  request: () => ({
    type: GET_TOKEN_FROM_REFRESH['REQUEST'],
  }),
  success: (res: any) => ({
    type: GET_TOKEN_FROM_REFRESH['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: GET_TOKEN_FROM_REFRESH['FAILURE'],
    payload: err
  })
}

export const createUserAccountApi = {
  request: ({ unique_name, user_name, password, imageFile, profile }: CreateUserAccountUseData) => ({
    type: CREATE_USER_ACCOUNT['REQUEST'],
    unique_name,
    user_name,
    password,
    imageFile,
    profile
  }),
  success: (res: any) => ({
    type: CREATE_USER_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: CREATE_USER_ACCOUNT['FAILURE'],
    payload: err,
  }),
};

export const loginUserAccountApi = {
  request: ({ unique_name, password }: LoginUserAccountUseData) => ({
    type: LOGIN_USER_ACCOUNT['REQUEST'],
    unique_name,
    password
  }),
  success: (res: any) => ({
    type: LOGIN_USER_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: LOGIN_USER_ACCOUNT['FAILURE'],
    payload: err,
  }), 
};

export const editUserAccountApi = {
  request: ({ user_name }: EditUserAccountUseData) => ({
    type: EDIT_USER_ACCOUNT['REQUEST'],
    user_name
  }),
  success: (res: any) => ({
    type: EDIT_USER_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: EDIT_USER_ACCOUNT['FAILURE'],
    payload: err,
  }),
}; 

export const logoutUserAccountApi = {
  request: () => ({
    type: LOGOUT_USER_ACCOUNT['REQUEST'],
  }),
  success: (res: any) => ({
    type: LOGOUT_USER_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: LOGOUT_USER_ACCOUNT['FAILURE'],
    payload: err,
  }), 
};

export const deleteUserAccountApi = {
  request: ({ password }: DeleteUserAccountUseData) => ({
    type: DELETE_USER_ACCOUNT['REQUEST'],
    password
  }),
  success: (res: any) => ({
    type: DELETE_USER_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: DELETE_USER_ACCOUNT['FAILURE'],
    payload: err,
  }),
};

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