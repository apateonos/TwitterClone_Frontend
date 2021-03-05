import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';

export interface CreateAccountUseData {
  email: string,
  password: string,
  profile: string,
  name: string
}

export const postCreateAccount = ({
  email, name, password, profile
}: CreateAccountUseData): AxiosPromise => {
  return get('/sign-up', {email, name, password, profile});
};

export interface LoginUserUseData {
  email: string,
  password: string
}

export const getLoginAccount = ({
  email, password
}: LoginUserUseData): AxiosPromise => {
  return get('/login', {email, password});
};