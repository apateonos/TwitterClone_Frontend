import { GET_USER_TIMELINE } from '../actions/types';

const initialState: TimelineReducerUseData = {
  tweets: [],
  error: ''
};

interface TimelineReducerUseData {
  tweets: [] | TimelineTweetsData;
  error: string;
}

export interface TimelineTweetsData {
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
  
  retweet_id: number;
  retweet_user_id: string;
  retweet_user_image: string;
  retweet_unique_name: string;
  retweet_display_name: string;
  retweet_text: string;
  retweet_image: string;
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