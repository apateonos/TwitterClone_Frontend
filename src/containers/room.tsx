import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps, useParams, useHistory } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { Header } from './index'; 
import { SendMessageUseData, LeaveRoomUseData } from '../socket/write';
import { sendMessageSocket, leaveRoomSocket, getMessageListApi } from '../store/actions/message';
import { UserSelfData } from '../store/reducers/user';
import { GlassButton, Message } from '../components/index';
import { MessageData } from '../store/reducers/message';
import { messageIcon }  from '../assets/images/svg';

interface MessageContainerProps extends RouteComponentProps<any> {
  getMessageList: () => object;
  sendMessageSocket: ({ room_id, message }: SendMessageUseData) => object;
  leaveRoomSocket: ({ room_id }: LeaveRoomUseData) => object;
  self: UserSelfData;
  messages: Array<MessageData>;
}

interface ParamsTypes {
  room_id: string; 
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  getMessageList,
  sendMessageSocket,
  leaveRoomSocket,
  self,
  messages
}) => {
  const { room_id } = useParams<ParamsTypes>();
  const [ message, setMessage ] = useState('');
  const history = useHistory();
  useEffect(() => {
    getMessageList()
  }, []);
  
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    switch ( name ) {
      case 'send':
        sendMessageSocket({ room_id, message });
        setMessage('');
        break;

      default:
        break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    switch ( name ) {
      case 'exit':
        leaveRoomSocket({ room_id });
        return history.push('/message');

      default:
        break;
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch ( name ) {
      case 'message':
        return setMessage(value);

      default:
        break;
    }
  }

  return (
    <>
      <Header title='Message' side={<GlassButton onClick={onClickHandler} name='exit'/>}/>
      <Message
        onSubmit={onSubmitHandler} 
        onClick={onClickHandler} 
        onChange={onChangeHandler} 
        self={self.user_id}
        message={message}
        messages={
          messages.length > 0
          ? messages.filter(m => m.room_id === room_id)
          : []
        }
      />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self,
  messages: rootState.messageReducer.messages
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessageList: () => {
    return dispatch(getMessageListApi.request());
  },
  sendMessageSocket: ({ room_id, message }: SendMessageUseData) => {
    return dispatch(sendMessageSocket.request({ room_id, message }));
  },
  leaveRoomSocket: ({ room_id }: LeaveRoomUseData) => {
    return dispatch(leaveRoomSocket.request({ room_id }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(MessageContainer)
);