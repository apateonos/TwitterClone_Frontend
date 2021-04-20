import { 
  CREATE_USER_ACCOUNT, 
  LOGIN_USER_ACCOUNT, 
  EDIT_USER_ACCOUNT, 
  LOGOUT_USER_ACCOUNT, 
  DELETE_USER_ACCOUNT, 
  GET_TOKEN_FROM_REFRESH,
  POST_FOLLOW_USER, 
  DELETE_FOLLOW_USER
} from '../actions/types';

const initialState: UserReducer = {
  self: {},
  follows: [],
  error: '',
};

interface UserReducer {
  self: {} | UserSelfData;
  follows: []|Array<FollowsData>;
  error: any;
}

export interface UserSelfData {
  user_id: number;
  user_image: string;
  unique_name: string;
  display_name: string;
  profile: string;
  created_at: string;
}

export interface FollowsData {
  user_id: number;
  follower_id: number;
}

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_TOKEN_FROM_REFRESH['REQUEST']:
    case CREATE_USER_ACCOUNT['REQUEST']:
    case LOGIN_USER_ACCOUNT['REQUEST']:
    case EDIT_USER_ACCOUNT['REQUEST']:
    case LOGOUT_USER_ACCOUNT['REQUEST']:
    case DELETE_USER_ACCOUNT['REQUEST']:
    case POST_FOLLOW_USER['REQUEST']:
    case DELETE_FOLLOW_USER['REQUEST']:
      return { ...state };
    
    case GET_TOKEN_FROM_REFRESH['SUCCESS']:
    case CREATE_USER_ACCOUNT['SUCCESS']:
    case EDIT_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        self: payload.user
      };

    case LOGIN_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        self: payload.user,
        follows: payload.follows
      }

    case LOGOUT_USER_ACCOUNT['SUCCESS']:
    case DELETE_USER_ACCOUNT['SUCCESS']:
      return {
        ...state,
        self: {}
      }
      
    case POST_FOLLOW_USER['SUCCESS']:
    case DELETE_FOLLOW_USER['SUCCESS']:
      return { 
        ...state,
        follows: payload.follows,
      }

    case GET_TOKEN_FROM_REFRESH['FAILURE']:
    case CREATE_USER_ACCOUNT['FAILURE']:
    case LOGIN_USER_ACCOUNT['FAILURE']:
    case EDIT_USER_ACCOUNT['FAILURE']:
    case LOGOUT_USER_ACCOUNT['FAILURE']:
    case DELETE_USER_ACCOUNT['FAILURE']:
    case POST_FOLLOW_USER['FAILURE']:
    case DELETE_FOLLOW_USER['FAILURE']:
      return {
        ...state,
        error: payload.data,
      };

    
    default:
      return { ...state };
  }
}
