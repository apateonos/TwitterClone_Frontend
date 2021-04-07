import { GET_USER_PROFILE } from '../actions/types';

const initialState: ProfileReducerUseData = {
  user: {},
  tweets: [],
  follower: [],
  following: [],
  error: ''
};

interface ProfileReducerUseData {
  user: {} | ProfileUserData;
  tweets: [] | Array<ProfileTweetsData>;
  follower: [] | Array<ProfileFollowerData>
  following: [] | Array<ProfileFollowingData>
  error: string;
}

export interface ProfileUserData {  
  id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
  user_profile: string;
  created_at: string;
}

export interface ProfileFollowingData {
  id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
}

export interface ProfileFollowerData {
  id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
}

export interface ProfileTweetsData {
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

export default function (state=initialState, { type, payload }: any) {
  switch (type) {
    case GET_USER_PROFILE['REQUEST']:
      return { ...state }
    
    case GET_USER_PROFILE['SUCCESS']:
      return {
        ...state,
        user: payload.user,
        tweets: payload.tweets,
        following: payload.following,
        follower: payload.follower
      }
    
    case GET_USER_PROFILE['FAILURE']:
      return {
        ...state,
        error: payload.data
      }
    
    default:
      return { ...state };
  }
}