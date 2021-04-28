import { fork, take, call, put, all } from 'redux-saga/effects';
import { CreateRoomUseData, SendMessageUseData, LeaveRoomUseData } from '../../socket/write';
import * as Soc from '../../socket/write';
import * as type from '../actions/types';
import { readSocketChannel } from '../../socket/read';
import { createRoomSocket, sendMessageSocket, leaveRoomSocket } from '../actions/message';
import { connection, joinRoom } from '../../socket/service';

function* watchReadSocketChannelSaga (socket: any) {
  const channel = yield call(readSocketChannel, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* createRoomSocketSaga (socket: any, { users }: CreateRoomUseData) {
  try {
    const data = yield call(Soc.createRoom, socket, { users });
    if (yield data.code === 'errors') throw Error; 
    yield put(createRoomSocket.success(data));
    yield call(joinRoom, socket);
  } catch (err) {
    console.log(err);
    yield put(createRoomSocket.failure(err));
  }
}

function* watchCreateRoomSocketSaga ( socket: any ) {
  while (true) {
    const { users } = yield take(type.CREATE_ROOM['REQUEST']);
    yield fork(createRoomSocketSaga, socket, { users });
  }
}

function* sendMessageSocketSaga (socket: any, { room_id, message }: SendMessageUseData) {
  try {
    const data = yield call(Soc.sendMessage, socket, { room_id, message });
    if (yield data.code === 'errors') throw Error;
    yield put(sendMessageSocket.success(data));
  } catch (err) {
    yield put(sendMessageSocket.failure(err));
  }
}

function* watchSendMessageSocketSaga (socket: any) {
  while (true) {
    const { room_id, message } = yield take(type.SEND_MESSAGE['REQUEST']);
    yield fork(sendMessageSocketSaga, socket, { room_id, message });
  }
}

function* leaveRoomSocketSaga (socket: any, { room_id }: LeaveRoomUseData) {
  try {
    const data = yield call(Soc.leaveRoom, socket, { room_id });
    if (yield data.code === 'error') throw Error;
    yield put(leaveRoomSocket.success(data));
  } catch (err) {
    yield put(leaveRoomSocket.failure(err));
  }
}

function* watchLeaveRoomSocketSaga (socket: any) {
  while (true) {
    const { room_id } = yield take(type.LEAVE_ROOM['REQUEST']);
    yield fork(leaveRoomSocketSaga, socket, { room_id })
  }
}

function* socketHandlerSaga (socket: any) {
  yield fork(watchReadSocketChannelSaga, socket);
  yield fork(watchCreateRoomSocketSaga, socket);
  yield fork(watchSendMessageSocketSaga, socket);
  yield fork(watchLeaveRoomSocketSaga, socket);
}

function* watchSocketFlowSaga () {
  while (true) {
    const { token } = yield take('CONNECTION_SOCKET');
    yield console.log(token);
    const socket = yield call(connection, token);
    console.log(socket);
    yield call(joinRoom, socket);
    yield fork(socketHandlerSaga, socket);
  }
}

export default function* () {
  yield all([
    fork(watchSocketFlowSaga)
  ])
}