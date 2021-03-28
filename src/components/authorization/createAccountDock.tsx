import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createUserAccountApi } from '../../store/actions/user';
import { AreaInput, InfoInput, WhiteButton } from '../index';

export default () => {
  const dispatch = useDispatch();
  const [ userUniqueName, setUserUniqueName ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ profile, setProfile ] = useState('');
  const [ comfirmPassword, setComfirmPassword ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;

    let err: false|string = false;
    switch ( name ) {
      case 'createAccount':
        err = verificationInputs({ userUniqueName, userName, password, comfirmPassword });
        if (err) {
          setErrorMessage(err);
          break;
        }
        dispatch(
          createUserAccountApi.request({ 
            userUniqueName,
            userName, 
            password, 
            profile
        }));
        break;

      default:
        break;
    }
  }

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
      default:
        break;
    }
  }

  return (
    <InputBox>
      <TitleText>Create Account</TitleText>
      <InfoInput onChange={onChangeHandler} name='userUniqueName' value={userUniqueName} placeholder='email or UniqueName...'/>
      <InfoInput onChange={onChangeHandler} name='userName' value={userName} placeholder='name...'/>
      <InfoInput onChange={onChangeHandler} name='password' value={password} placeholder='password...'/>
      <InfoInput onChange={onChangeHandler} name='comfirmPassword' value={comfirmPassword} placeholder='check password again...'/>
      <AreaInputWrap><AreaInput onChange={onChangeHandler} name='profile' value={profile} placeholder='profile...' /></AreaInputWrap>
      <WhiteButton onClick={onSubmitHandler} name='createAccount' text='Create'/>
    </InputBox>
  )
}

interface VerificationInputUseData {
  userName: string;
  userUniqueName: string;
  password: string;
  comfirmPassword?: string;
}
const verificationInputs = ({ userUniqueName, userName, password, comfirmPassword }:VerificationInputUseData ) => {
  if ( userUniqueName === '' ) return 'enter your ID or Email...';
  if ( userName !== undefined && userName === '' ) return 'enter your DisplayName...';
  if ( password === '' ) return 'enter your password...';
  if ( comfirmPassword !== undefined && comfirmPassword === '' ) return 'enter your comfirm password...';
  if ( comfirmPassword !== undefined && comfirmPassword !== password ) return "it's different password between comfirm password...";

  return false;
};

const TitleText = styled.h2`
  font-size: 25px;
  font-weight: 800;
  text-align: center;
`;

const InputBox = styled.form`
  width: 100%;
  padding: 30px;
  border-radius: 20px;
  
  @media only screen and (min-width: 500px) {
    width: 500px;
  }
`;

const AreaInputWrap = styled.div`
  margin: 5px 0;
  border: 1px solid ${props => props.theme.color.blue};
  border-radius: 25px;
  padding: 7px 21px;
`;