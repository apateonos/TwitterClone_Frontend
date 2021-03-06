import axios, { AxiosPromise } from 'axios';
import { post, del } from './service';

export interface PostTweetUseData {
  tweet_text: string;
  imageFile: any;
  reply_id?: number;
}
export const postTweet = (data: PostTweetUseData): AxiosPromise => {
  const header = {headers: {'Content-Type': 'multipart/form-data'}};
  const form = new FormData();
  console.log(data.reply_id);
  form.append('tweet_text', data.tweet_text);
  form.append('imageFile', data.imageFile);
  form.append('reply_id', String(data.reply_id));

  return post('tweet/post', form, header);
};

export interface DeleteTweetUseData {
  tweet_id: number,
}
export const deleteTweet = (data: DeleteTweetUseData): AxiosPromise => {
  return del('tweet/del', data);
}

export interface PostRetweetUseData {
  tweet_id: number;
}
export const postRetweet = (data: PostRetweetUseData): AxiosPromise => {
  return post('retweet/post', data);
};

export interface DeleteRetweetUseData {
  tweet_id: number
};
export const deleteRetweet = (data: DeleteRetweetUseData): AxiosPromise => {
  return del('retweet/del', data);
}

export interface PostHeartUseData {
  tweet_id: number;
}
export const postHeart = (data: PostHeartUseData): AxiosPromise => {
  console.log(data);
  return post('heart/post', data);
};

export interface DeleteHeartUseData {
  tweet_id: number;
};
export const deleteHeart = (data: DeleteHeartUseData): AxiosPromise => {
  return del('heart/del', data);
}