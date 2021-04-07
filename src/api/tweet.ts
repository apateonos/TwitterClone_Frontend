import axios, { AxiosPromise } from 'axios';
import { post, put, del } from './service';

export interface PostUserTweetUseData {
  tweet: string;
  imageFile: any|null;
  replyNumber?: number;
  retweetNumber?: number;
}
export const postUserTweet = ({
  tweet, imageFile, replyNumber, retweetNumber
}: PostUserTweetUseData): AxiosPromise => {
  const form = new FormData();
  if (tweet) form.append('tweet', tweet);
  if (imageFile) form.append('imageFile', imageFile);
  if (replyNumber) form.append('replyNumber', replyNumber as any);
  if (retweetNumber) form.append('retweetNumber', retweetNumber as any);
  return post('tweet/post', form, {headers: {'Content-Type': 'multipart/form-data'}});
};

export interface UpdateUserTweetUseData {
  tweetNumber: number,
  tweet: string,
  imageFile: any,
}
export const updateUserTweet = ({
  tweetNumber, tweet, imageFile
}: UpdateUserTweetUseData): AxiosPromise => {
  const form = new FormData();
  form.append('tweetNumber', tweetNumber as any);
  form.append('tweet', tweet);
  form.append('image', imageFile);
  return put('tweet/update', form, {headers: {'Content-Type': 'multipart/form-data'}});
};

export interface DeleteUserTweetUseData {
  tweetNumber: number,
}
export const deleteUserTweet = ({
  tweetNumber
}: DeleteUserTweetUseData): AxiosPromise => {
  return del('tweet/del', { tweetNumber })
}