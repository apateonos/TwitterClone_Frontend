import { CREATE_USER_ACCOUNT, LOGIN_USER_ACCOUNT, CHANGE_USER_NAME, CHANGE_USER_PASSWORD, DELETE_USER_ACCOUNT } from '../actions/types';

const initialState = {
  payload: [],
  token: []
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case LOGIN_USER_ACCOUNT['REQUEST']:
    case CREATE_USER_ACCOUNT['REQUEST']:
    case CREATE_USER_ACCOUNT['SUCCESS']:
      return { ...state };
    case LOGIN_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        token: payload,
      };
    case LOGIN_USER_ACCOUNT['FAILURE']:
    case CREATE_USER_ACCOUNT['FAILURE']:
      return {
        ...state,
        error: payload,
      };
    default:
      return { ...state };
  }
}
