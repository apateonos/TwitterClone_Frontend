import axios, { AxiosPromise } from 'axios';
import { get, post, put, del } from './service';

export interface GetThisTweetReplyListUseData {
  tweet_id: number
}
export const getThisTweetReplyList = ({
  tweet_id
}: GetThisTweetReplyListUseData): AxiosPromise => {
  return get('/reply/tweet', { tweet_id });
};

export interface PostThisTweetReplyUseData {
  tweet_id: string,
  reply: string
}
export const PostThisTweetReply = ({
  tweet_id, reply
}: PostThisTweetReplyUseData): AxiosPromise => {
  return get('/reply/post', { tweet_id, reply });
};

export interface UpdateThisTweetReplyUseData {
  tweet_id: number,
  reply_id: number,
  reply: string
}
export const updateThisTweetReply = ({
  tweet_id, reply_id, reply
}: UpdateThisTweetReplyUseData): AxiosPromise => {
  return post('/reply/update',{ tweet_id, reply_id, reply })
}

export interface DeleteThisTweetReplyUseData {
  tweet_id: number,
  reply_id: number
} 
export const deleteThisTweetReply = ({
  tweet_id, reply_id
}: DeleteThisTweetReplyUseData): AxiosPromise => {
  return post('/reply/update',{ tweet_id, reply_id })
}
