import { GET_SEARCH_BY_KEYWORD } from '../actions/types';

const initialState: SearchReducerUseData = {
  results: [],
  err: ""
}

interface SearchReducerUseData {
  results: [] | SearchResultsData;
  err: string;
}

export interface SearchResultsData {
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
  tweet_view: number;
  
  retweet_id: number;
  retweet_user_id: string;
  retweet_unique_name: string;
  retweet_display_name: string;
  retweet_text: string;
  retweet_image: string;
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
        err: payload.err
      }
    
    default:
      return { ...state }
  }
}