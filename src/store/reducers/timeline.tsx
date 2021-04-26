import { GET_USER_TIMELINE } from '../actions/types';

const initialState: TimelineReducerUseData = {
  tweets: [],
  error: ''
};

interface TimelineReducerUseData {
  tweets: [] | Array<TweetData>;
  error: any;
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

export default function (state=initialState, { type, payload }: any) {
  switch (type) {
    case GET_USER_TIMELINE['REQUEST']:
      return { ...state }

    case GET_USER_TIMELINE['SUCCESS']:
      return {
        ...state,
        tweets: payload.timeline,
      }

    case GET_USER_TIMELINE['FAILURE']:
      return {
        ...state,
        error: payload.data
      }

    default:
      return { ...state };
  }
}