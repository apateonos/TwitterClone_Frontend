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
    case GET_USER_TIMELINE['REQUEST']:
      return { ...state }

    case GET_USER_TIMELINE['SUCCESS']:
      return {
        ...state,
        tweets: payload.res,
      }

    case GET_USER_TIMELINE['FAILURE']:
      return {
        ...state,
        error: payload.err
      }

    default:
      return { ...state };
  }
}