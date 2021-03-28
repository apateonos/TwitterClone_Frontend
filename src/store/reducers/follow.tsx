import { GET_FOLLOW_USER_LIST, POST_FOLLOW_USER, DELETE_FOLLOW_USER } from '../actions/types';

const initialState = {
  res: [],
  msg: '',
  error: ''
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_FOLLOW_USER_LIST['REQUEST']:
    case POST_FOLLOW_USER['REQUEST']:
    case DELETE_FOLLOW_USER['REQUEST']:
      return { ...state };
    case GET_FOLLOW_USER_LIST['SUCCESS']:
    case POST_FOLLOW_USER['SUCCESS']:
    case DELETE_FOLLOW_USER['SUCCESS']:
      return { 
        ...state,
        res: payload.res,
      }
    case GET_FOLLOW_USER_LIST['FAILURE']:
    case POST_FOLLOW_USER['FAILURE']:
    case DELETE_FOLLOW_USER['FAILURE']:
      return {
        ...state,
        error: payload.err,
      };
    default:
      return { ...state };
  }
}

