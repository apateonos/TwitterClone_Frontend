import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { useChange, useClick, useSubmit } from '../handler/index';
import { SelfData } from '../store/reducers/user';
import { MessageData } from '../store/reducers/message';

interface MessageContainerUseProps extends RouteComponentProps<any> {
  self: SelfData;
  messages: Array<MessageData>;
}

interface ParamsTypes {
  room_id: string; 
}

const initialState = { message: '' };
const MessageContainer: React.FC<MessageContainerUseProps> = ({
  self,
  messages
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
  self: rootState.userReducer.self,
  messages: rootState.messageReducer.messages
})

export default withRouter(
  compose(connect(mapStateToProps))(MessageContainer)
);