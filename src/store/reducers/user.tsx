import { CREATE_USER_ACCOUNT, LOGIN_USER_ACCOUNT, CHANGE_USER_INFORMATION, LOGOUT_USER_ACCOUNT, DELETE_USER_ACCOUNT } from '../actions/types';

const initialState = {
  self: {},
  error: "",
};

interface UserReducer {
  self: {} | UserSelfData;
  error: string;
}

export interface UserSelfData {
  userNumber: number;
  userImage: string;
  userName: string;
  userUniqueName: string;
}

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case CREATE_USER_ACCOUNT['REQUEST']:
    case LOGIN_USER_ACCOUNT['REQUEST']:
    case CHANGE_USER_INFORMATION['REQUEST']:
    case LOGOUT_USER_ACCOUNT['REQUEST']:
    case DELETE_USER_ACCOUNT['REQUEST']:
      return { ...state };

    case CREATE_USER_ACCOUNT['SUCCESS']:
    case LOGIN_USER_ACCOUNT['SUCCESS']:
    case CHANGE_USER_INFORMATION['SUCCESS']:
      return {
        ...state,
        self: payload.res
      };

    case LOGOUT_USER_ACCOUNT['SUCCESS']:
    case DELETE_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        self: {}
      }
      
    case CREATE_USER_ACCOUNT['FAILURE']:
    case LOGIN_USER_ACCOUNT['FAILURE']:
    case CHANGE_USER_INFORMATION['FAILURE']:
    case LOGOUT_USER_ACCOUNT['FAILURE']:
    case DELETE_USER_ACCOUNT['FAILURE']:
      return {
        ...state,
        error: payload.err,
      };

    default:
      return { ...state };
  }
}
