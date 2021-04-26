import { CREATE_ROOM, SEND_MESSAGE, LEAVE_ROOM, LOGIN_USER_ACCOUNT, GET_TOKEN_FROM_REFRESH } from '../actions/types';

const initialState: MessageReducerUseData = {
  messages: [],
  now: '',
  rooms: [],
  err: ''
}

interface MessageReducerUseData {
  messages: []|Array<MessageData>;
  now: string;
  rooms: []|Array<RoomData>;
  err: string;
}

export interface MessageData {
  room_id: string;
  user_id: number;
  user_name: string;
  unique_name: string;
  created_at: string;
  message: string;
}

export interface RoomData {
  user_image: string;
  user_name: string;
  unique_name: string;
  room_id: string;
}

export default function (state=initialState, { type, payload }: any) {
  switch (type) {
    case GET_TOKEN_FROM_REFRESH['SUCCESS']:
    case LOGIN_USER_ACCOUNT['SUCCESS']:
      return { ...state,
        messages: payload.messages,
        rooms: payload.rooms,
      }

    case CREATE_ROOM['REQUEST']:
    case SEND_MESSAGE['REQUEST']:
    case LEAVE_ROOM['REQUEST']:
      return { ...state }
    
    case SEND_MESSAGE['SUCCESS']:
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        messages: [ ...state.messages, payload ]
      }
    
    case CREATE_ROOM['SUCCESS']:
    case 'RECEIVE_INVITED':
      return {
        ...state,
        rooms: [ ...state.rooms, payload.room_id ],
        now: payload.room_id
      }
    
    case LEAVE_ROOM['SUCCESS']:
      return {
        ...state,
        rooms: payload.rooms
      }
    
    case CREATE_ROOM['FAILURE']:
    case SEND_MESSAGE['FAILURE']:
    case LEAVE_ROOM['FAILURE']:
      return { 
        ...state,
        err: payload.data
      }

    default:
      return { ...state }
  }
}