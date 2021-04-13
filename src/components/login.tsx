import React from 'react';
import styled from 'styled-components';
import { InfoInput, WhiteButton, BlueButton } from './index';

interface LoginComponentUseProps {
  onSubmit: Function;
  onClick: Function;
  onChange: Function;
  userUniqueName: string;
  password: string;
  error: number;
  errorMessage: string;
}

export default ({ onSubmit, onClick, onChange, userUniqueName, password, error, errorMessage }: LoginComponentUseProps) => {
  return (
    <Container name='login' onSubmit={(e)=> onSubmit(e)} error={error ? error : 0}>
      <TitleText>Login Account</TitleText>
      <InfoInput onChange={onChange} name='userUniqueName' value={userUniqueName} placeholder='email or UniqueName...'/>
      <InfoInput onChange={onChange} name='password' type='password' value={password} placeholder='password...'/>
      <ErrorText>{errorMessage}</ErrorText>
      <ButtonWrap>
        <WhiteButton onClick={()=>{}} name='login' text='Login' type='submit'/>
        <BlueButton onClick={onClick} name='create' text='Create Account'/>
      </ButtonWrap>
    </Container>
  )
}

interface StyledProps {
  error: number;
}

const Container = styled.form<StyledProps>`
  max-width: 600px;
  margin: 8px auto;
  padding: 0 15px;
  input:nth-child(${props => props.error}) {
    border: 1px solid red;
    background: rgba(200, 0, 0, 0.1);
  }
`;

const TitleText = styled.h2`
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 8px;
`;

const ErrorText = styled.div` 
  padding: 3px 15px;
`;

const ButtonWrap = styled.div`
  margin-top: 5px;
  button: first-child {
    margin-bottom: 8px;
  }

  @media only screen and (min-width: 500px) {
    display: flex;
    justify-content: space-around;

    button: first-child {
      margin-bottom: 0;
      margin-right: 5px;
    }
  }
`;