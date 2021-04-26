import { GET_USER_PROFILE } from '../actions/types';

const initialState: ProfileReducerUseData = {
  user: {},
  tweets: [],
  follower: [],
  following: [],
  error: ''
};

interface ProfileReducerUseData {
  user: {}|UserData;
  tweets: []|Array<TweetData>;
  follower: []|Array<FollowerData>
  following: []|Array<FollowingData>
  error: any;
}

export interface UserData {  
  user_id: number;
  user_image: string;
  user_name: string;
  unique_name: string;
  profile: string;
  created_at: string;
}

export interface FollowingData {
  user_id: number;
  user_image: string;
  user_name: string;
  unique_name: string;
  profile: string;
}

export interface FollowerData {
  user_id: number;
  user_image: string;
  user_name: string;
  unique_name: string;
  profile: string;
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