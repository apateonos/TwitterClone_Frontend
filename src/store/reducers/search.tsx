import { GET_SEARCH_BY_KEYWORD } from '../actions/types';

const initialState: SearchReducerUseData = {
  results: [],
  err: ''
}

interface SearchReducerUseData {
  results: []|Array<ResultData>;
  err: any;
}

export interface ResultData {
  user_id: number;
  user_image: string;
  unique_name: string;
  display_name: string;

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
    case GET_SEARCH_BY_KEYWORD['REQUEST']:
      return { ...state };

    case GET_SEARCH_BY_KEYWORD['SUCCESS']:
      return {
        ...state,
        results: payload.results
      }

    case GET_SEARCH_BY_KEYWORD['FAILURE']:
      return {
        ...state,
        err: payload.data
      }
    
    default:
      return { ...state }
  }
}