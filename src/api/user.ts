import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';
/* app.post('/refresh', VerifyRefresh, SignToken);
app.post('/user/sign', getImage, SignUser, LoginUser, GetFollows, SignToken, SignRefresh);
app.post('/login', LoginUser, GetFollows, SignToken, SignRefresh);
app.put('/user/edit', VerifyToken, getImage, EditUser, GetUser);
app.delete('/user/unsign', LoginUser, DelUser); */

export const getTokenFromRefresh = (): AxiosPromise => {
  return post('refresh');
}

export interface CreateUserAccountUseData {
  unique_name: string,
  password: string,
  profile: string,
  user_image: any;
  user_name: string
}
export const createUserAccount = ({
  unique_name, user_name, password, user_image, profile
}: CreateUserAccountUseData): AxiosPromise => {
  return post('user/sign', {
    unique_name,
    user_name,
    password,
    user_image,
    profile
  }, {headers: {'Content-Type': 'multipart/form-data'}});
};

export interface LoginUserAccountUseData {
  unique_name: string,
  password: string
}
export const loginUserAccount = ({
  unique_name, password
}: LoginUserAccountUseData): AxiosPromise => {
  return post('login', { unique_name, password });
};

export interface EditUserAccountUseData {
  imageFile: any;
  user_name: string;
  profile: string;
}
export const editUserAccount = ({ 
  imageFile,
  user_name, 
  profile
}: EditUserAccountUseData): AxiosPromise => {
  return put(
    'user/change', {
      imageFile, 
      user_name, 
      profile
    }, {headers: {'Content-Type': 'multipart/form-data'}}
  );
}

export const logoutUserAccount = (): AxiosPromise => {
  return post('logout');
}

export interface DeleteUserAccountUseData {
  password: string,
}
export const deleteUserAccount = ({
  password
}: DeleteUserAccountUseData): AxiosPromise => {
  return del('user/unsigned', { password });
}

export interface FollowUseData {
  follower_id: number
}

export const postFollowUser = ({
  follower_id
}: FollowUseData): AxiosPromise => {
  return post('follow/post', { follower_id });
};

export const deleteFollowUser = ({
  follower_id
}: FollowUseData): AxiosPromise => {
  return del('follow/del', { follower_id });
};