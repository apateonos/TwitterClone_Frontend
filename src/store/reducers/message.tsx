import { GET_MESSAGE_LIST, CREATE_ROOM, SEND_MESSAGE, LEAVE_ROOM } from '../actions/types';

const initialState: MessageReducerUseData = {
  messages: [],
  now: '',
  rooms: [],
  err: ''
}

interface MessageReducerUseData {
  messages: [] | Array<MessageData>;
  now: string;
  rooms: [] | Array<MessageRoomData>;
  err: string;
}

export interface MessageData {
  room_id: string;
  user_id: number;
  display_name: string;
  unique_name: string;
  created_at: string;
  message: string;
}

export interface MessageRoomData {
  user_image: string;
  display_name: string;
  unique_name: string;
  room_id: string;
}

export default function (state=initialState, { type, payload }: any) {
  switch (type) {
    case GET_MESSAGE_LIST['REQUEST']:
    case CREATE_ROOM['REQUEST']:
    case SEND_MESSAGE['REQUEST']:
    case LEAVE_ROOM['REQUEST']:
      return { ...state }

    case GET_MESSAGE_LIST['SUCCESS']:
      return { ...state,
        messages: payload.messages,
        rooms: payload.rooms,
      }
    
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
    
    case 'RECEIVE_USER_LEAVE':
    case GET_MESSAGE_LIST['FAILURE']:
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