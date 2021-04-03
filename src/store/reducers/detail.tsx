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

export interface DetailReplysData {
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

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_DETAIL_TWEET['REQUEST']:
      return { ...state }
      
    case GET_DETAIL_TWEET['SUCCESS']:
      return {
        ...state,
        tweet: payload.res.tweet,
        replys: payload.res.replys
      }

    case GET_DETAIL_TWEET['FAILURE']:
      return {
        ...state,
        error: payload.err
      }
    default:
      return { ...state };
  }
}