import { CREATE_USER_ACCOUNT, LOGIN_USER_ACCOUNT, CHANGE_USER_INFORMATION, LOGOUT_USER_ACCOUNT, DELETE_USER_ACCOUNT, GET_USER_TOKEN_FROM_REFRESH } from './types';
import { CreateUserAccountUseData, LoginUserAccountUseData, ChangeUserNameUseData, DeleteUserAccountUseData } from '../../api/user';

export const getUserTokenFromRefreshApi = {
  request: () => ({
    type: GET_USER_TOKEN_FROM_REFRESH['REQUEST'],
  }),
  success: (res: any) => ({
    type: GET_USER_TOKEN_FROM_REFRESH['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: GET_USER_TOKEN_FROM_REFRESH['FAILURE'],
    payload: err
  })
}

export const createUserAccountApi = {
  request: ({ userUniqueName, userName, password, imageFile, profile }: CreateUserAccountUseData) => ({
    type: CREATE_USER_ACCOUNT['REQUEST'],
    userUniqueName,
    userName,
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
    type: CHANGE_USER_INFORMATION['REQUEST'],
    userName
  }),
  success: (res: any) => ({
    type: CHANGE_USER_INFORMATION['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: CHANGE_USER_INFORMATION['FAILURE'],
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