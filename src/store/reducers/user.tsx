import { 
  CREATE_USER_ACCOUNT, 
  LOGIN_USER_ACCOUNT, 
  EDIT_USER_ACCOUNT, 
  LOGOUT_USER_ACCOUNT, 
  DELETE_USER_ACCOUNT, 
  GET_TOKEN_FROM_REFRESH
} from '../actions/types';

interface UserReducerUseData {
  self: {}|SelfData;
  error: any;
}

const initialState: UserReducerUseData = {
  self: {},
  error: '',
};

export interface SelfData {
  user_id: number;
  user_image: string;
  unique_name: string;
  display_name: string;
  profile: string;
  created_at: string;
}

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_TOKEN_FROM_REFRESH['REQUEST']:
    case CREATE_USER_ACCOUNT['REQUEST']:
    case LOGIN_USER_ACCOUNT['REQUEST']:
    case EDIT_USER_ACCOUNT['REQUEST']:
    case LOGOUT_USER_ACCOUNT['REQUEST']:
    case DELETE_USER_ACCOUNT['REQUEST']:
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

    case GET_TOKEN_FROM_REFRESH['FAILURE']:
    case CREATE_USER_ACCOUNT['FAILURE']:
    case LOGIN_USER_ACCOUNT['FAILURE']:
    case EDIT_USER_ACCOUNT['FAILURE']:
    case LOGOUT_USER_ACCOUNT['FAILURE']:
    case DELETE_USER_ACCOUNT['FAILURE']:
      return {
        ...state,
        error: payload.data,
      };

    
    default:
      return { ...state };
  }
}
