import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { LoginUserAccountUseData } from 'api/user';
import { loginUserAccountApi } from '../store/actions/user';
import { modal } from '../store/actions/modal';
import { Login } from '../components/index';

interface LoginContainerUseProps extends RouteComponentProps<any> {
  loginUserAccountApi: ({ userUniqueName, password }: LoginUserAccountUseData) => object;
  createAccountModal: () => object;
  error: any;
}

const LoginContainer: React.FC<LoginContainerUseProps> = ({
  loginUserAccountApi,
  createAccountModal,
  error
}) => {
  const [ userUniqueName, setUserUniqueName ] = useState('');
  const [ password, setPassword ] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    switch (name) {
      case 'login':
        return loginUserAccountApi({ userUniqueName, password });

      default:
        break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'create':
        return createAccountModal();

      default:
        break;
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'userUniqueName': 
        setUserUniqueName(value);
        break;

      case 'password': 
        setPassword(value); 
        break;

      default:
        break;
    }
  }

  return (
    <Login 
      onSubmit={onSubmitHandler}
      onClick={onClickHandler}
      onChange={onChangeHandler}
      userUniqueName={userUniqueName}
      password={password}
      error={errorCode(error.code)}
      errorMessage={error.message}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  error: rootState.userReducer.error
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginUserAccountApi: ({ userUniqueName, password }: LoginUserAccountUseData) => {
    return dispatch(loginUserAccountApi.request({ userUniqueName, password }));
  },
  
  createAccountModal: () => {
    return dispatch(modal.createAccount());
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(LoginContainer)
);
  
const errorCode = (error: string) => {
  switch (error) {
    case 'ER_INVAILD_UNIQUENAME':
      return 2;
    case 'ER_INVAILD_PASSWORD':
      return 3;
    default:
      return 0;
  }
}