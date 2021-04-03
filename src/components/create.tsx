import React from 'react';
import styled from 'styled-components';
import { InfoInput, AreaInput, WhiteButton } from './index';

interface SignComponentUseProps {
  onChange: Function;
  onClick: Function;
  userUniqueName: string; 
  userName: string; 
  password: string; 
  comfirmPassword: string; 
  profile: string; 
}

export default ({ 
  onChange, 
  onClick, 
  userUniqueName, 
  userName, 
  password, 
  comfirmPassword, 
  profile 
}: SignComponentUseProps) => {  
  return (
    <InputBox>
      <TitleText>Create Account</TitleText>
      <InfoInput onChange={onChange} name='userUniqueName' value={userUniqueName} placeholder='email or UniqueName...'/>
      <InfoInput onChange={onChange} name='userName' value={userName} placeholder='name...'/>
      <InfoInput onChange={onChange} name='password' value={password} placeholder='password...'/>
      <InfoInput onChange={onChange} name='comfirmPassword' value={comfirmPassword} placeholder='check password again...'/>
      <AreaInputWrap>
        <AreaInput onChange={onChange} name='profile' value={profile} placeholder='profile...' />
      </AreaInputWrap>
      <WhiteButton onClick={onClick} name='createAccount' text='Create'/>
    </InputBox>
  )
}


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