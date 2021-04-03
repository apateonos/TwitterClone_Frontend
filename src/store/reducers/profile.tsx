import { GET_USER_PROFILE, GET_MORE_USER_TWEET } from '../actions/types';

const initialState: ProfileReducerUseData = {
  user: {},
  tweets: [],
  error: ''
};

interface ProfileReducerUseData {
  user: {} | ProfileUserData;
  tweets: [] | Array<ProfileTweetsData>;
  error: string;
}

export interface ProfileUserData {  
  userNumber: number;
  profileBackground: string;
  userImage: string;
  userName: string;
  userUniqueName: string;
  profile: string;
  userCreatedTime: string;
  userFollowerNumber: number;
  userFollowingNumber: number;
}

export interface ProfileTweetsData {
  userNumber: number;
  userImage: string;
  userUniqueName: string;
  userName: string;
  tweetNumber: number;
  tweetContent: string;
  tweetImage: string;
  tweetCreatedTime: string;
  replyTweetCount: number;
  retweetCount: number;
  retweetUserImage: string;
  retweetNumber: number;
  retweetUserName: string;
  retweetUserUniqueName: string;
  retweetContent: string;
}

export default function (state=initialState, { type, payload }: any) {
  switch (type) {
    case GET_USER_PROFILE['REQUEST']:
    case GET_MORE_USER_TWEET['REQUEST']:
      return { ...state }
    
    case GET_USER_PROFILE['SUCCESS']:
      return {
        ...state,
        pickupTime: payload.res.pickupTime,
        user: payload.res.user,
        tweets: payload.res.tweets
      }

    case GET_MORE_USER_TWEET['SUCCESS']:
      return {
        ...state,
        pickupTime: payload.res.pickupTime,
        tweets: payload.res.tweets
      }
    
    case GET_USER_PROFILE['FAILURE']:
    case GET_MORE_USER_TWEET['FAILURE']:
      return {
        ...state,
        error: payload.err
      }
    
    default:
      return { ...state };
  }
}