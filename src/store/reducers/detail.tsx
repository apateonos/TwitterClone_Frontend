import { GET_DETAIL_TWEET } from '../actions/types';

const initialState: DetailReducerUseData = {
  tweet: {},
  replys: [],
  error: '',
};

interface DetailReducerUseData {
  tweet: {}|DetailTweetData;
  replys: []|Array<DetailReplysData>;
  error: string;
}

export interface DetailTweetData {  
  user_id: number;
  user_image: string;
  unique_name: string;
  display_name: string;

  id: number;
  tweet_text: string;
  tweet_image: string;
  created_at: string;
  reply_count: number;
  retweet_count: number;
  
  retweet_id: number;
  retweet_user_id: string;
  retweet_unique_name: string;
  retweet_display_name: string;
  retweet_text: string;
  retweet_image: string;
}

export interface DetailReplysData {
  user_id: number;
  user_image: string;
  unique_name: string;
  display_name: string;

  id: number;
  tweet_text: string;
  tweet_image: string;
  created_at: string;
  reply_count: number;
  retweet_count: number;
  
  retweet_id: number;
  retweet_user_id: string;
  retweet_unique_name: string;
  retweet_display_name: string;
  retweet_text: string;
  retweet_image: string;
}

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_DETAIL_TWEET['REQUEST']:
      return { ...state }
      
    case GET_DETAIL_TWEET['SUCCESS']:
      return {
        ...state,
        tweet: payload.tweet,
        replys: payload.replys
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