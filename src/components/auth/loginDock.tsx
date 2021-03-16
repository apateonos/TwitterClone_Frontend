import React from 'react';
import styled from 'styled-components';
import { BlueButton, InfoInput, WhiteButton } from '../index';

interface PropsData {
  props: LoginDockComponentProps
}

export interface LoginDockComponentProps {
  onChange: Function;
  onSubmit: Function;
  onClick: Function;
  userUniqueName: string;
  password: string;
}

export default ({ props }: PropsData) => {
  const { onSubmit, onChange, onClick, userUniqueName, password } = props;
  return (
    <>
      <InputBox>
        <InfoInput onChange={onChange} name='userUniqueName' value={userUniqueName} placeholder='email or UniqueName...'/>
        <InfoInput onChange={onChange} name='password' value={password} placeholder='password...'/>
        <ButtonBox>
          <WhiteButton onClick={onSubmit} name='loginAccount' type='submit' text='Login'/>
          <BlueButton onClick={onClick} name='modal' text='Create Account'/>
        </ButtonBox>
        
      </InputBox>
    </>
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

const ButtonBox = styled.div`
  button: first-child {
    margin-bottom: 5px;
  }

  @media only screen and (min-width: 500px) {
    display: flex;
    justify-content: space-around;
    
    button: first-child {
      margin-right: 5px;
    }
  }
`;