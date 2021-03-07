import { CREATE_USER_ACCOUNT, LOGIN_USER_ACCOUNT, CHANGE_USER_NAME, CHANGE_USER_PASSWORD, DELETE_USER_ACCOUNT } from '../actions/types';

const initialState = {
  token: '',
  user: {},
  res: '',
  error: ''
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case LOGIN_USER_ACCOUNT['REQUEST']:
    case CREATE_USER_ACCOUNT['REQUEST']:
    case CHANGE_USER_NAME['REQUEST']:
    case DELETE_USER_ACCOUNT['REQUEST']:
      return { ...state };
    case LOGIN_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        user: payload.data.user,
        token: payload.data.token,
      };
    case CREATE_USER_ACCOUNT['SUCCESS']:
    case CHANGE_USER_NAME['SUCCESS']:
    case DELETE_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        res: payload,
      }
    case LOGIN_USER_ACCOUNT['FAILURE']:
    case CREATE_USER_ACCOUNT['FAILURE']:
    case CHANGE_USER_NAME['FAILURE']:
    case DELETE_USER_ACCOUNT['FAILURE']:
      return {
        ...state,
        error: payload,
      };
    default:
      return { ...state };
  }
}
