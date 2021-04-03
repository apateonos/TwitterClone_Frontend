import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';

export interface CreateUserAccountUseData {
  userUniqueName: string,
  password: string,
  profile: string,
  userName: string
}
export const createUserAccount = ({
  userUniqueName, userName, password, profile
}: CreateUserAccountUseData): AxiosPromise => {
  return post('/user/sign-up', {userUniqueName, userName, password, profile});
};

export interface LoginUserAccountUseData {
  userUniqueName: string,
  password: string
}
export const loginUserAccount = ({
  userUniqueName, password
}: LoginUserAccountUseData): AxiosPromise => {
  return post('/user/login', { userUniqueName, password });
};

export interface ChangeUserNameUseData {
  userName: string
}
export const changeUserName = ({ 
  userName 
}: ChangeUserNameUseData): AxiosPromise => {
  return put('/user/change/name', { userName });
}

export interface DeleteUserAccountUseData {
  password: string,
}
export const deleteUserAccount =({
  password
}: DeleteUserAccountUseData): AxiosPromise => {
  return del('/user/unsigned', { password });
}