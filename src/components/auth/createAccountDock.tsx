import React from 'react';
import styled from 'styled-components';
import { TextArea, InfoInput, WhiteButton } from '../index';

interface PropsData {
  props: CreateAccountDockComponentProps;
}

export interface CreateAccountDockComponentProps {
  onSubmit: Function;
  onChange: Function;
  userUniqueName: string;
  userName: string;
  password: string;
  comfirmPassword: string;
  profile: string;
}

export default ({props}: PropsData) => {
  const {onSubmit, onChange, userUniqueName, userName, password, comfirmPassword, profile} = props;
  return (
    <InputBox>
      <TitleText>Create Account</TitleText>
      <InfoInput onChange={onChange} name='userUniqueName' value={userUniqueName} placeholder='email or UniqueName...'/>
      <InfoInput onChange={onChange} name='userName' value={userName} placeholder='name...'/>
      <InfoInput onChange={onChange} name='password' value={password} placeholder='password...'/>
      <InfoInput onChange={onChange} name='comfirmPassword' value={comfirmPassword} placeholder='check password again...'/>
      <TextAreaWrap><TextArea onChange={onChange} name='profile' value={profile} placeholder='profile...' /></TextAreaWrap>
      <WhiteButton onClick={onSubmit} name='createAccount' text='Create'/>
    </InputBox>
  )
}

const InputBox = styled.form`
  width: 100%;
  padding: 30px;
  border-radius: 20px;
  
  @media only screen and (min-width: 500px) {
    width: 500px;
  }
`;

const TitleText = styled.h2`
  font-size: 25px;
  font-weight: 800;
  text-align: center;
`;

const TextAreaWrap = styled.div`
  margin: 5px 0;
  border: 1px solid ${props => props.theme.color.blue};
  border-radius: 25px;
  padding: 7px 21px;
`;