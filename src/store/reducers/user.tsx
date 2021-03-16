import { CHECK_USER_ACCOUNT, CREATE_USER_ACCOUNT, LOGIN_USER_ACCOUNT, CHANGE_USER_NAME, CHANGE_USER_PASSWORD, DELETE_USER_ACCOUNT, GET_USER_INFO } from '../actions/types';

const initialState = {
  login: false,
  res: {},
  msg: '',
  error: '',
  user: {}
};


export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case CHECK_USER_ACCOUNT['REQUEST']:
    case LOGIN_USER_ACCOUNT['REQUEST']:
    case CREATE_USER_ACCOUNT['REQUEST']:
    case CHANGE_USER_NAME['REQUEST']:
    case DELETE_USER_ACCOUNT['REQUEST']:
    case GET_USER_INFO['REQUEST']:
      return { ...state };
    case CHECK_USER_ACCOUNT['SUCCESS']:
    case LOGIN_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        login: true,
        msg: payload.msg,
        res: payload
      };
    case CREATE_USER_ACCOUNT['SUCCESS']:
    case CHANGE_USER_NAME['SUCCESS']:
    case DELETE_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        msg: payload.msg,
      }
    case GET_USER_INFO['SUCCESS']:
      return {
        ...state,
        user: payload.res
      }
    case CHECK_USER_ACCOUNT['FAILURE']:
    case LOGIN_USER_ACCOUNT['FAILURE']:
    case CREATE_USER_ACCOUNT['FAILURE']:
    case CHANGE_USER_NAME['FAILURE']:
    case DELETE_USER_ACCOUNT['FAILURE']:
    case GET_USER_INFO['FAILURE']:
      return {
        ...state,
        error: payload,
      };
    default:
      return { ...state };
  }
}
