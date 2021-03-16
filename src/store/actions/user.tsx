import { CREATE_USER_ACCOUNT, LOGIN_USER_ACCOUNT, CHANGE_USER_NAME, CHANGE_USER_PASSWORD, DELETE_USER_ACCOUNT, CHECK_USER_ACCOUNT, GET_USER_INFO } from './types';
import { CreateUserAccountUseData, LoginUserAccountUseData, ChangeUserNameUseData, DeleteUserAccountUseData, GetUserInfoUseData } from '../../api/user';

export const getUserInfoApi = {
  request: ({ userUniqueName }: GetUserInfoUseData) => ({
    type: GET_USER_INFO['REQUEST'],
    userUniqueName
  }),
  success: (res: any) => ({
    type: GET_USER_INFO['SUCCESS'],
    payload: res
  }),
  failure: (err: Error) => ({
    type: GET_USER_INFO['FAILURE'],
    payload: err
  })
}

export const checkUserAccountApi = {
  request: () => ({
    type: CHECK_USER_ACCOUNT['REQUEST'],
  }),
  success: (res: any) => ({
    type: CHECK_USER_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: CHECK_USER_ACCOUNT['FAILURE'],
    payload: err,
  }),
};

export const createUserAccountApi = {
  request: ({ userUniqueName, userName, password, profile }: CreateUserAccountUseData) => ({
    type: CREATE_USER_ACCOUNT['REQUEST'],
    userUniqueName,
    userName,
    password,
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
  request: ({ userUniqueName, password }: LoginUserAccountUseData) => ({
    type: LOGIN_USER_ACCOUNT['REQUEST'],
    userUniqueName,
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

export const changeUserNameApi = {
  request: ({ userName }: ChangeUserNameUseData) => ({
    type: CHANGE_USER_NAME['REQUEST'],
    userName
  }),
  success: (res: any) => ({
    type: CHANGE_USER_NAME['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: CHANGE_USER_NAME['FAILURE'],
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
