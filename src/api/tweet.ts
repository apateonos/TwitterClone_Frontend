import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';

export interface GetUserTweetListUseData {
  user_id: number,
}
export const getUserTweetList = ({
  user_id
}: GetUserTweetListUseData): AxiosPromise => {
  return get('/tweet/users', { user_id })
}

export interface PostUserTweetUseData {
  tweet: string,
}
export const postUserTweet = ({
  tweet
}: PostUserTweetUseData): AxiosPromise => {
  return post('/tweet/post', { tweet });
};

export interface UpdateUserTweetUseData {
  tweet_id: number,
  tweet: string,
}
export const updateUserTweet = ({
  tweet_id, tweet
}: UpdateUserTweetUseData): AxiosPromise => {
  return put('/tweet/update', { tweet_id, tweet });
};

export interface DeleteUserTweetUseData {
  tweet_id: number,
}
export const deleteUserTweet = ({
  tweet_id
}: DeleteUserTweetUseData): AxiosPromise => {
  return del('/tweet/delete', { tweet_id })
}