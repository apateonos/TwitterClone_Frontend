import React from 'react';
import styled from 'styled-components';
import { InfoInput, WhiteButton, BlueButton } from './index';

interface LoginComponentUseProps {
  onClick: Function;
  onChange: Function;
  userUniqueName: string;
  password: string;
}

export default ({ onClick, onChange, userUniqueName, password }: LoginComponentUseProps) => {
  return (
    <Container>
      <InfoInput onChange={onChange} name='userUniqueName' value={userUniqueName} placeholder='email or UniqueName...'/>
      <InfoInput onChange={onChange} name='password' value={password} placeholder='password...'/>
      <ButtonWrap>
        <WhiteButton onClick={onClick} name='login' text='Login'/>
        <BlueButton onClick={onClick} name='create' text='Create Account'/>
      </ButtonWrap>
    </Container>
  )
}

const Container = styled.form`
  margin: 8px 0px;
  padding: 0 15px;
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