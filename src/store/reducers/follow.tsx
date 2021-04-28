import { GET_TOKEN_FROM_REFRESH, POST_FOLLOW_USER, DELETE_FOLLOW_USER, LOGIN_USER_ACCOUNT } from '../actions/types';

interface FollowReducerUseData {
  follows: Array<FollowsData>;
  error: any;
}
const initialState: FollowReducerUseData = {
  follows: [],
  error: {},
};

export interface FollowsData {
  user_id: number;
  following_id: number;
}

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_TOKEN_FROM_REFRESH['SUCCESS']:
    case LOGIN_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        follows: payload.followings
      }

    case POST_FOLLOW_USER['REQUEST']:
    case DELETE_FOLLOW_USER['REQUEST']:
      return { ...state };

    case POST_FOLLOW_USER['SUCCESS']:
    case DELETE_FOLLOW_USER['SUCCESS']:
      return {
        ...state,
        follows: payload.followings
      }

    case POST_FOLLOW_USER['FAILURE']:
    case DELETE_FOLLOW_USER['FAILURE']:
      return {
        ...state,
        error: payload.data
      }

    default:
      return { ...state }
  }
}