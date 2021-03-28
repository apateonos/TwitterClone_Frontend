import React from 'react';
import styled from 'styled-components';
import { WhiteButton, BlueButton } from '../index';

interface ButtonComponenetUseProps {
  onSubmit: Function;
  onClick: Function;
}
export default ({ onClick, onSubmit }: ButtonComponenetUseProps) => {
  return (
    <Container>
      <WhiteButton onClick={onSubmit} name='loginAccount' type='submit' text='Login'/>
      <BlueButton onClick={onClick} name='modal' text='Create Account'/>
    </Container>
  )
}

const Container = styled.div`
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