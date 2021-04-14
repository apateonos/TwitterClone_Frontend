import { emit } from './service';

export interface CreateRoomUseData {
  users: Array<number>;
}
export const createRoom = ( socket: any, { users }: CreateRoomUseData) => {
  return emit( socket, 'create room', { users });
}

export interface SendMessageUseData {
  room_id: string;
  message: string;
}
export const sendMessage = ( socket: any, { room_id, message }: SendMessageUseData ) => {
  console.log(room_id, message);
  return emit( socket, 'send message', { room_id, message });
}

export interface LeaveRoomUseData {
  room_id: string;
}
export const leaveRoom = ( socket: any, { room_id }: LeaveRoomUseData) => {
  return emit( socket, 'leave room', { room_id });
}