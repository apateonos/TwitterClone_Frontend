import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { MessageData, RoomData } from '../store/reducers/message';
import { useChange, useClick, useSubmit } from '../handler/index';

interface MessageContainerProps extends RouteComponentProps<any> {
  rooms: Array<RoomData>;
  messages: Array<MessageData>;
}

const initialState = {}
const MessageContainer: React.FC<MessageContainerProps> = ({
  messages, rooms
}) => {
  const [ state, onChangeHandler ] = useChange(initialState);
  const onSubmitHandler = useSubmit(state);
  const onClickHandler = useClick();

  return (
    <>
      
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  rooms: rootState.messageReducer.rooms,
  messages: rootState.messageReducer.messages
})

export default withRouter(
  compose(connect(mapStateToProps))(MessageContainer)
);