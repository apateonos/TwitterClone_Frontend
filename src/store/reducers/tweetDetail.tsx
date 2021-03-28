import { GET_TWEET_DETAIL } from '../actions/types';

const initialState = {
  error: '',
  replys: [],
  selectedTweet: {},
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_TWEET_DETAIL['REQUEST']:
      return { ...state }
    case GET_TWEET_DETAIL['SUCCESS']:
      return {
        ...state,
        selectedTweet: payload.res.main,
        replys: payload.res.replys
      }
    case GET_TWEET_DETAIL['FAILURE']:
      return {
        ...state,
        error: payload.err
      }
    default:
      return { ...state };
  }
}