import { GET_USER_TIMELINE } from '../actions/types';

const initialState = {
  res: [],
  msg: '',
  error: ''
};

export default function (state=initialState, { type, payload }: any) {
  switch (type) {
    case GET_USER_TIMELINE['REQUEST']:
      return { ...state }
    case GET_USER_TIMELINE['SUCCESS']:
      return {
        ...state,
        res: payload.res,
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