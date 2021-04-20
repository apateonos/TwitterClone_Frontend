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
  error: any;
}

export interface ProfileUserData {  
  user_id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
  user_profile: string;
  created_at: string;
}

export interface ProfileFollowingData {
  user_id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
  user_profile: string;
}

export interface ProfileFollowerData {
  user_id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
  user_profile: string;
}

export interface ProfileTweetsData {
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