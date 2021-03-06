import {
  POST_LOGIN_ACCOUNT,
  POST_CREATE_ACCOUNT
} from '../actions/types';

const initialState = {
  token: '',
  error: ''
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case POST_LOGIN_ACCOUNT['REQUEST']:
    case POST_CREATE_ACCOUNT['REQUEST']:
    case POST_CREATE_ACCOUNT['SUCCESS']:
      return { ...state };
    case POST_LOGIN_ACCOUNT['SUCCESS']:
      return {
        ...state,
        token: payload,
      };
    case POST_LOGIN_ACCOUNT['FAILURE']:
    case POST_CREATE_ACCOUNT['FAILURE']:
      return {
        ...state,
        error: payload,
      };
    default:
      return { ...state };
  }
}
