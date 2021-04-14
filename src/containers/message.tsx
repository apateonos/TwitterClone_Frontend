import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { Header } from './index';
import { RoomList } from '../components/index'; 
import { CreateRoomUseData, LeaveRoomUseData } from '../socket/write';
import { createRoomSocket, leaveRoomSocket } from '../store/actions/message';
import { UserSelfData } from 'store/reducers/user';
import { FollowsData } from 'store/reducers/follow';
import { ModalComponentData } from '../store/reducers/modal';
import { modal } from '../store/actions/modal';
import { MessageData, MessageRoomData } from 'store/reducers/message';

interface MessageContainerProps extends RouteComponentProps<any> {
  createRoomSocket: ({ users }: CreateRoomUseData) => object;
  leaveRoomSocket: ({ room_id }: LeaveRoomUseData) => object;
  openModal: ({ component }: ModalComponentData) => object;
  rooms: Array<MessageRoomData>;
  messages: Array<MessageData>;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  createRoomSocket,
  leaveRoomSocket,
  openModal,
  messages,
  rooms,
}) => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;

    switch ( name ) {
      case 'search':
        break;

      default:
        break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    switch ( name ) {
      case 'modal':
        return openModal({ component: <></>})

      default:
        break;
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch ( name ) {
      case 'search':
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Header title='Message'/>
      <RoomList
        onSubmit={onSubmitHandler} 
        onClick={onClickHandler} 
        onChange={onChangeHandler} 
        keyword={''}
        roomList={rooms}
      />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  rooms: rootState.messageReducer.rooms,
  messages: rootState.messageReducer.messages
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createRoomSocket: ({ users }: CreateRoomUseData) => {
    return dispatch(createRoomSocket.request({ users }));
  },
  leaveRoomSocket: ({ room_id }: LeaveRoomUseData) => {
    return dispatch(leaveRoomSocket.request({ room_id }));
  },
  openModal: ({ component }: ModalComponentData) => {
    return dispatch(modal.open({ component }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(MessageContainer)
);