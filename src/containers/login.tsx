import React, { useState } from 'react';
import { useChange, useSubmit, useClick } from '../handler/index';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { Login } from '../components/index';

interface LoginContainerUseProps extends RouteComponentProps<any> {
  err: any;
}

const initialState = { unique_name: '', password: '' };
const LoginContainer: React.FC<LoginContainerUseProps> = ({
  err
}) => {
  const [ state, onChangeHandler ] = useChange(initialState);
  const onSubmitHandler = useSubmit(state);
  const onClickHandler = useClick();

  return (
    <Login
      onChange={onChangeHandler}
      onClick={onClickHandler}
      onSubmit={onSubmitHandler}
      state={state}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  err: rootState.userReducer.error
})

export default withRouter(
  compose(connect(mapStateToProps))(LoginContainer)
);