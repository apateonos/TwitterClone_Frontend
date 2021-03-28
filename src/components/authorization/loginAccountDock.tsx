import React, { useState } from 'react';
import styled from 'styled-components';
import { CreateAccountDock, InfoInput } from '../index';
import LoginButtonComponent from './loginButtonComponent';
import { loginUserAccountApi } from '../../store/actions/user';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const [ userUniqueName, setUserUniqueName ] = useState('');
  const [ password, setPassword ] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;

    let err: false|string = false;
    switch ( name ) {
      case 'loginAccount':
        dispatch(
          loginUserAccountApi.request({ 
            userUniqueName,
            password
        }));
        break;
      
      default:
        break;
    }
  }

  const onClickCreateAccount = () => {
    dispatch({type: 'CREATE_ACCOUNT'});
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
    <Container>
      <InfoInput onChange={onChangeHandler} name='userUniqueName' value={userUniqueName} placeholder='email or UniqueName...'/>
      <InfoInput onChange={onChangeHandler} name='password' value={password} placeholder='password...'/>
      <LoginButtonComponent onSubmit={onSubmitHandler} onClick={onClickCreateAccount}/>
    </Container>
  )
}

const Container = styled.form`
  margin: 0 15px;
  padding: 8px 0;
`;