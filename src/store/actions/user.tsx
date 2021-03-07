import { CREATE_USER_ACCOUNT, LOGIN_USER_ACCOUNT, CHANGE_USER_NAME, CHANGE_USER_PASSWORD, DELETE_USER_ACCOUNT } from './types';
import { CreateAccountUseData, LoginUserUseData, ChangeUserNameUseData, DeleteUserAccountUseData } from '../../api/user';

export const createUserAccountApi = {
  request: ({ email, name, password, profile }: CreateAccountUseData) => ({
    type: CREATE_USER_ACCOUNT['REQUEST'],
    email,
    name,
    password,
    profile
  }),
  success: (res: any) => ({
    type: CREATE_USER_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: CREATE_USER_ACCOUNT['FAILURE'],
    err: err.message,
  }),
};

export const loginUserAccountApi = {
  request: ({ email, password }: LoginUserUseData) => ({
    type: LOGIN_USER_ACCOUNT['REQUEST'],
    email,
    password
  }),
  success: (res: any) => ({
    type: LOGIN_USER_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: LOGIN_USER_ACCOUNT['FAILURE'],
    err: err.message,
  }), 
};

export const changeUserNameApi = {
  request: ({ name }: ChangeUserNameUseData) => ({
    type: CHANGE_USER_NAME['REQUEST'],
    name
  }),
  success: (res: any) => ({
    type: CHANGE_USER_NAME['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: CHANGE_USER_NAME['FAILURE'],
    err: err.message,
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
    err: err.message,
  }),
}; 
