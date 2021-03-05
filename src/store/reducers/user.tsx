import { POST_CREATE_ACCOUNT } from 'store/actions/types';

const initialState = {
  id: '',
  access_token: '',
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case POST_CREATE_ACCOUNT['REQUEST']:
      return { ...state };
    case POST_CREATE_ACCOUNT['SUCCESS']:
      return {
        ...state,
        payload,
      };
    case POST_CREATE_ACCOUNT['FAILURE']:
      return {
        ...state,
        error: payload,
      };
    default:
      return { ...state };
  }
}
