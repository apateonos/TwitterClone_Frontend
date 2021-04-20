import { GET_MESSAGE_LIST, CREATE_ROOM, SEND_MESSAGE, LEAVE_ROOM } from './types';
import { CreateRoomUseData, SendMessageUseData, LeaveRoomUseData } from '../../socket/write';

export const getMessageListApi = {
  request: () => ({
    type: GET_MESSAGE_LIST['REQUEST']
  }),
  success: (res: any) => ({
    type: GET_MESSAGE_LIST['SUCCESS'],
    payload: res
  }),
  failure: (err: Error) => ({
    type: GET_MESSAGE_LIST['FAILURE'],
    payload: err
  })
}

export const createRoomSocket = {
  request: ({ users }: CreateRoomUseData) => ({
    type: CREATE_ROOM['REQUEST'],
    users
  }),
  success: (res: any) => ({
    type: CREATE_ROOM['SUCCESS'],
    payload: res
  }),
  failure: (err: Error) => ({
    type: CREATE_ROOM['FAILURE'],
    payload: err
  })
}

export const sendMessageSocket = {
  request: ({ room_id, message }: SendMessageUseData) => ({
    type: SEND_MESSAGE['REQUEST'],
    room_id,
    message,
  }),
  success: (res: any) => ({
    type: SEND_MESSAGE['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: SEND_MESSAGE['FAILURE'],
    err: err.message,
  }),
};

export const leaveRoomSocket = {
  request: ({ room_id }: LeaveRoomUseData) => ({
    type: LEAVE_ROOM['REQUEST'],
    room_id
  }),
  success: (res: any) => ({
    type: LEAVE_ROOM['SUCCESS'],
    payload: res
  }),
  failure: (err: any) => ({
    type: LEAVE_ROOM['FAILURE'],
    payload: err
  })
}

export const receiveMessageSocket = (res: any) => ({
  type: 'RECEIVE_MESSAGE',
  payload: res
})

export const receiveInviteRoomSocket = (res: any) => ({
  type: 'RECEIVE_INVITE_ROOM',
  payload: res
})

export const receiveUserLeaveSocket = (res: any) => ({
  type: 'RECEIVE_USER_LEAVE',
  payload: res
})