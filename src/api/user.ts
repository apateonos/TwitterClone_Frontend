import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';

export interface CreateAccountUseData {
  email: string,
  password: string,
  profile: string,
  name: string
}

export const createUserAccount = ({
  email, name, password, profile
}: CreateAccountUseData): AxiosPromise => {
  return post('/sign-up', {email, name, password, profile});
};

export interface LoginUserUseData {
  email: string,
  password: string
}

export const loginUserAccount = ({
  email, password
}: LoginUserUseData): AxiosPromise => {
  return post('/login', {email, password});
};

export interface ChangeUserNameUseData {
  name: string
}

export const changeUserName = ({ 
  name 
}: ChangeUserNameUseData): AxiosPromise => {
  return put('/user/name', { name });
}

export interface DeleteUserAccountUseData {
  password: string,
}

export const deleteUserAccount =({
  password
}: DeleteUserAccountUseData): AxiosPromise => {
  return del('/user/unsigned', { password });
}