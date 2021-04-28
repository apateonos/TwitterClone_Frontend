import { GET_DETAIL_TWEET } from '../actions/types';


const initialState: DetailReducerUseData = {
  tweet: {},
  heartList: [],
  retweetList: [],
  replys: [],
  error: '',
};

interface DetailReducerUseData {
  tweet: {}|TweetData;
  replys: []|Array<ReplyData>;
  retweetList: []|Array<RetweetListData>;
  heartList: []|Array<HeartListData>
  error: string;
}

export interface RetweetListData {
  user_id: number;
  user_image: string;
  unique_name: string;
  user_name: string;
}

export interface HeartListData {
  user_id: number;
  user_image: string;
  unique_name: string;
  user_name: string;
}

export interface TweetData {  
  user_id: number;
  user_image: string;
  unique_name: string;
  user_name: string;

  tweet_id: number;
  tweet_text: string;
  tweet_image: string;
  created_at: string;
  reply_count: number;
  retweet_count: number;
  heart_count: number;
}

export interface ReplyData {
  user_id: number;
  user_image: string;
  unique_name: string;
  user_name: string;

  tweet_id: number;
  tweet_text: string;
  tweet_image: string;
  created_at: string;
  reply_count: number;
  retweet_count: number;
  heart_count: number;
}

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_DETAIL_TWEET['REQUEST']:
      return { ...state }
      
    case GET_DETAIL_TWEET['SUCCESS']:
      return {
        ...state,
        error: payload,
        tweet: payload.tweets,
        replys: payload.replys,
        retweetList: payload.retweets,
        heartList: payload.hearts
      }

    case GET_DETAIL_TWEET['FAILURE']:
      return {
        ...state,
        error: payload.data
      }

    default:
      return { ...state };
  }
}