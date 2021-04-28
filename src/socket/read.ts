import { eventChannel } from 'redux-saga';
import { receiveMessageSocket, receiveInviteRoomSocket, receiveUserLeaveSocket } from '../store/actions/message';

export function readSocketChannel(socket: any) {
  return eventChannel(emit => {
    socket.on('receive message', (item: any) => {
      emit(receiveMessageSocket(item));
    });
    socket.on('receive invite', (item: any) => {
      console.log(item);
      emit(receiveInviteRoomSocket(item));
    })
    socket.on('receive leave', (item: any) => {
      emit(receiveUserLeaveSocket(item))
    })
    return () => {};
  });
}