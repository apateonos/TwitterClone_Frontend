import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';

export interface GetUserTweetListUseData {
  userUniqueName: string;
}
export const getUserTweetList = ({
  userUniqueName
}: GetUserTweetListUseData): AxiosPromise => {
  console.log(userUniqueName);
  return get('/tweet/user', { userUniqueName })
}

export interface PostUserTweetUseData {
  tweetContent: string;
  tweetImage: string;
  replyTweetNumber?: number|null;
  retweetNumber?: number|null;
}
export const postUserTweet = ({
  tweetContent, tweetImage, replyTweetNumber, retweetNumber
}: PostUserTweetUseData): AxiosPromise => {
  return post('/tweet/post', { tweetContent, tweetImage, replyTweetNumber, retweetNumber });
};

export interface UpdateUserTweetUseData {
  tweetNumber: number,
  tweetContent: string,
  tweetImage: string,
}
export const updateUserTweet = ({
  tweetNumber, tweetContent, tweetImage
}: UpdateUserTweetUseData): AxiosPromise => {
  return put('/tweet/update', { tweetNumber, tweetContent, tweetImage });
};

export interface DeleteUserTweetUseData {
  tweetNumber: number,
}
export const deleteUserTweet = ({
  tweetNumber
}: DeleteUserTweetUseData): AxiosPromise => {
  return del('/tweet/delete', { tweetNumber })
}