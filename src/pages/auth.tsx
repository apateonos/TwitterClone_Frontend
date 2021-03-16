import React from 'react';
import { CreateAccountDock, LoginDock, Modal } from '../components/index';
import { CreateAccountDockComponentProps } from '../components/auth/createAccountDock';
import { LoginDockComponentProps } from '../components/auth/loginDock';
interface props {
  onClick: Function;
  errorMessage: string,
  isModal: boolean,
  createAccountDockProps: CreateAccountDockComponentProps;
  loginDockProps: LoginDockComponentProps;
}

export default ({onClick, createAccountDockProps, loginDockProps, errorMessage, isModal}: props) => {
  return (
    <>
      {isModal && <Modal onClick={onClick} component={<CreateAccountDock props={createAccountDockProps}/>}/>}
      <LoginDock props={loginDockProps}/>
      <div>msg: {errorMessage}</div>
    </>
  )
}