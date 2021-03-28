import { CREATE_USER_ACCOUNT, LOGIN_USER_ACCOUNT, CHANGE_USER_NAME, DELETE_USER_ACCOUNT, GET_USER_PROFILE } from '../actions/types';

const initialState = {
  isLogin: false,
  error: "",
  self: {},
  user: {}
};


export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case CREATE_USER_ACCOUNT['REQUEST']:
    case LOGIN_USER_ACCOUNT['REQUEST']:
    case CHANGE_USER_NAME['REQUEST']:
    case DELETE_USER_ACCOUNT['REQUEST']:
    case GET_USER_PROFILE['REQUEST']:
      return { ...state };

    case CREATE_USER_ACCOUNT['SUCCESS']:
    case CHANGE_USER_NAME['SUCCESS']:
    case DELETE_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        self: payload.res
      };
    
    case LOGIN_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        self: payload.res,
        isLogin: true
      }
    
    case GET_USER_PROFILE['SUCCESS']:
      return {
        ...state,
        user: payload.res
      }

    case CREATE_USER_ACCOUNT['FAILURE']:
    case LOGIN_USER_ACCOUNT['FAILURE']:
    case CHANGE_USER_NAME['FAILURE']:
    case DELETE_USER_ACCOUNT['FAILURE']:
      return {
        ...state,
        error: payload.err,
      };

    default:
      return { ...state };
  }
}
