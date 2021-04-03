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
        <BlueButton onClick={onClick} name='modal' text='Create Account'/>
    </ButtonWrap>
    </Container>
  )
}

const Container = styled.form`
  margin: 0 15px;
  padding: 8px 0;
`;

const ButtonWrap = styled.div`
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