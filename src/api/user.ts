import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';

export const getTokenFromRefresh = (): AxiosPromise => {
  return post('refresh');
}

export interface CreateUserAccountUseData {
  unique_name: string,
  password: string,
  profile: string,
  imageFile: any;
  user_name: string
}
export const createUserAccount = (data: CreateUserAccountUseData): AxiosPromise => {
  const header = { headers: {'Content-Type': 'multipart/form-data' }};
  const form = new FormData;
  form.append('imageFile', data.imageFile);
  form.append('unique_name', data.unique_name);
  form.append('user_name', data.user_name);
  form.append('password', data.password);
  form.append('profile', data.profile);
  return post('user/sign', form, header);
};

export interface LoginUserAccountUseData {
  unique_name: string,
  password: string
}
export const loginUserAccount = (data: LoginUserAccountUseData): AxiosPromise => {
  return post('login', data);
};

export interface EditUserAccountUseData {
  imageFile: any;
  user_name: string;
  profile: string;
}
export const editUserAccount = (data: EditUserAccountUseData): AxiosPromise => {
  const header = { headers: {'Content-Type': 'multipart/form-data' }};
  return put('user/change', data, header);
}

export const logoutUserAccount = (): AxiosPromise => {
  return post('logout');
}

export interface DeleteUserAccountUseData {
  password: string,
}
export const deleteUserAccount = (data: DeleteUserAccountUseData): AxiosPromise => {
  return del('user/unsigned', data);
}

