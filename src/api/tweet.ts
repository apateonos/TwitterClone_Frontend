import axios, { AxiosPromise } from 'axios';
import { post, del } from './service';

export interface PostTweetUseData {
  tweet_text: string;
  tweet_image: any|null;
  reply_id?: number;
}
export const postTweet = ({
  tweet_text, tweet_image, reply_id,
}: PostTweetUseData): AxiosPromise => {
  return post('tweet/post', {
    tweet_text,
    tweet_image,
    reply_id,
  }, {headers: {'Content-Type': 'multipart/form-data'}});
};

export interface DeleteTweetUseData {
  tweet_id: number,
}
export const deleteTweet = ({
  tweet_id
}: DeleteTweetUseData): AxiosPromise => {
  return del('tweet/del', { tweet_id });
}

export interface PostRetweetUseData {
  tweet_id: number;
}
export const postRetweet = ({
  tweet_id
}: PostRetweetUseData): AxiosPromise => {
  return post('retweet/post', { tweet_id });
};

export interface DeleteRetweetUseData {
  tweet_id: number
};
export const deleteRetweet = ({
  tweet_id
}: DeleteRetweetUseData): AxiosPromise => {
  return del('retweet/del', { tweet_id });
}

export interface PostHeartUseData {
  tweet_id: number;
}
export const postHeart = ({
  tweet_id
}: PostHeartUseData): AxiosPromise => {
  return post('heart/post', { tweet_id });
};

export interface DeleteHeartUseData {
  tweet_id: number
};
export const deleteHeart = ({
  tweet_id
}: DeleteHeartUseData): AxiosPromise => {
  return del('heart/del', { tweet_id });
}