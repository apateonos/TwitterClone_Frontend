import * as React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom'; //왜리액트라우터 에서 담겻는지 모르겠음
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import {
  createUserAccountApi,
  loginUserAccountApi
} from '../store/actions/user';
import { State } from "../store/reducers/index";
import { CreateUserAccountUseData, LoginUserAccountUseData } from '../api/user';
import { Auth } from '../pages/index';

interface AuthContainerProps {
  createUserAccountApi: ({ userUniqueName, userName, password, profile }: CreateUserAccountUseData) => object;
  loginUserAccountApi: ({ userUniqueName, password }: LoginUserAccountUseData) => object;
  error: string;
}

interface VFLoginUseData {
  userUniqueName: string;
  password: string;
}

interface VerificationInputUseData {
  userName?: string;
  userUniqueName: string;
  password: string;
  comfirmPassword?: string;
}

const AuthContainer: React.FC<AuthContainerProps> = ({
  createUserAccountApi,
  loginUserAccountApi,
  error,
}) => {
  const [ userUniqueName, setUserUniqueName ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ profile, setProfile ] = useState('');
  const [ comfirmPassword, setComfirmPassword ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ isModal, setIsModal ] = useState(false);
  
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'userUniqueName': setUserUniqueName(value) 
        break;
      case 'userName': setUserName(value) 
        break;
      case 'password': setPassword(value) 
        break;
      case 'comfirmPassword': setComfirmPassword(value) 
        break;
      case 'profile': setProfile(value) 
        break;
    }
  }

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    let err: false|string = false;

    switch ( name ) {
      case 'loginAccount':
        err = verificationInputs({ userUniqueName, password });
        if (err) {
          setErrorMessage(err);
          break;
        }
        loginUserAccountApi({ userUniqueName, password })
        break;

      case 'createAccount':
        err = verificationInputs({ userUniqueName, userName, password, comfirmPassword });
        if (err) {
          setErrorMessage(err);
          break;
        }
        createUserAccountApi({ userUniqueName, userName, password, profile })
        break;

      default:
        break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    switch ( name ) {
      case 'modal': setIsModal( prev => !prev );
        break;
    }
  }

  return (
    <>
    <Auth
      onClick={onClickHandler}
      errorMessage={errorMessage}
      isModal={isModal}
      loginDockProps={{
        onChange:onChangeHandler,
        onSubmit:onSubmitHandler,
        onClick:onClickHandler,
        userUniqueName,
        password,
      }}
      createAccountDockProps={{
        onChange:onChangeHandler,
        onSubmit:onSubmitHandler,
        userUniqueName,
        userName,
        profile,
        password,
        comfirmPassword
      }}
    />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  error: rootState.userReducer.error
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createUserAccountApi: ({ userUniqueName, userName, password, profile}: CreateUserAccountUseData) => {
    return dispatch(createUserAccountApi.request({ userUniqueName, userName, password, profile}));
  },
  loginUserAccountApi: ({ userUniqueName, password}: LoginUserAccountUseData) => {
    return dispatch(loginUserAccountApi.request({ userUniqueName, password}));
  }
});

const verificationInputs = ({ userUniqueName, userName, password, comfirmPassword }:VerificationInputUseData ) => {
  if ( userUniqueName === '' ) return 'enter your ID or Email...';
  if ( userName !== undefined && userName === '' ) return 'enter your DisplayName...';
  if ( password === '' ) return 'enter your password...';
  if ( comfirmPassword !== undefined && comfirmPassword === '' ) return 'enter your comfirm password...';
  if ( comfirmPassword !== undefined && comfirmPassword !== password ) return "it's different password between comfirm password...";

  return false;
};

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(AuthContainer)
);