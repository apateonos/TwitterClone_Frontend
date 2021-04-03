import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { LoginUserAccountUseData } from 'api/user';
import { loginUserAccountApi } from '../store/actions/user';
import { modal } from '../store/actions/modal';
import { Login } from '../components/index';

interface LoginContainerUseProps extends RouteComponentProps<any> {
  loginUserAccountApi: ({ userUniqueName, password }: LoginUserAccountUseData) => object;
  createAccountModal: () => object;
}

const LoginContainer: React.FC<LoginContainerUseProps> = ({
  loginUserAccountApi,
  createAccountModal,
}) => {
  const [ userUniqueName, setUserUniqueName ] = useState('');
  const [ password, setPassword ] = useState('');

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'login':
        loginUserAccountApi({ userUniqueName, password });

      case 'create':
        createAccountModal();

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
      onClick={onClickHandler}
      onChange={onChangeHandler}
      userUniqueName={userUniqueName}
      password={password}
    />
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginUserAccountApi: ({ userUniqueName, password }: LoginUserAccountUseData) => {
    return dispatch(loginUserAccountApi.request({ userUniqueName, password }));
  },
  createAccountModal: () => {
    return dispatch(modal.createAccount());
  }
});

export default withRouter(
  compose(connect(null, mapDispatchToProps))(LoginContainer)
);

interface VerificationInputUseData {
  userUniqueName: string;
  password: string;
}
const verificationInputs = ({ userUniqueName, password }: VerificationInputUseData) => {
  if ( userUniqueName === '' ) return 'enter your ID or Email...';
  if ( password === '' ) return 'enter your password...';

  return false;
};