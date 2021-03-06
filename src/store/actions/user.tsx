import { POST_CREATE_ACCOUNT, POST_LOGIN_ACCOUNT } from './types';
import { CreateAccountUseData, LoginUserUseData } from '../../api/user';

export const postCreateAccountApi = {
  request: ({ email, name, password, profile }: CreateAccountUseData) => ({
    type: POST_CREATE_ACCOUNT['REQUEST']
  }),
  success: (res: any) => ({
    type: POST_CREATE_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: POST_CREATE_ACCOUNT['FAILURE'],
    err: err.message,
  }),
};

export const postLoginAccountApi = {
  request: ({ email, password }: LoginUserUseData) => ({
    type: POST_LOGIN_ACCOUNT['REQUEST'],
  }),
  success: (res: any) => ({
    type: POST_LOGIN_ACCOUNT['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: POST_LOGIN_ACCOUNT['FAILURE'],
    err: err.message,
  }), 
};
