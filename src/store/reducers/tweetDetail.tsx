import { GET_TWEET_DETAIL } from '../actions/types';

const initialState = {
  msg: '',
  error: '',
  replyList: [],
  main: {},
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_TWEET_DETAIL['REQUEST']:
      return { ...state }
    case GET_TWEET_DETAIL['SUCCESS']:
      return {
        ...state,
        main: payload.res.main,
        replyList: payload.res.replys
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