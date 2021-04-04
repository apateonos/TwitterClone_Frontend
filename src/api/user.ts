import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';

export interface CreateUserAccountUseData {
  userUniqueName: string,
  password: string,
  profile: string,
  imageFile: any;
  userName: string
}
export const createUserAccount = ({
  userUniqueName, userName, password, imageFile, profile
}: CreateUserAccountUseData): AxiosPromise => {
  console.log(userUniqueName, userName, password, imageFile, profile);
  const form = new FormData;
  form.append('userUniqueName', userUniqueName);
  form.append('userName', userName);
  form.append('password', password);
  form.append('imageFile', imageFile);
  form.append('profile', profile);
  return post('user/sign-up', form,  {headers: {'Content-Type': 'multipart/form-data'}});
};

export interface LoginUserAccountUseData {
  userUniqueName: string,
  password: string
}
export const loginUserAccount = ({
  userUniqueName, password
}: LoginUserAccountUseData): AxiosPromise => {
  return post('user/login', { userUniqueName, password });
};

export interface ChangeUserNameUseData {
  userName: string
}
export const changeUserName = ({ 
  userName 
}: ChangeUserNameUseData): AxiosPromise => {
  return put('user/change', { userName });
}

export interface DeleteUserAccountUseData {
  password: string,
}
export const deleteUserAccount =({
  password
}: DeleteUserAccountUseData): AxiosPromise => {
  return del('user/unsigned', { password });
}