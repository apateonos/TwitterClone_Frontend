import { BlueButton } from '../index';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface props {
  component: ReactNode;
  onClick: Function;
}
function Modal ({component, onClick}: props) {
  return (
    <Container>
      <Board>
        <Headline><ButtonWrap><BlueButton onClick={onClick} name='modal' text='Back' /></ButtonWrap></Headline>
        <Section>{component}</Section>
      </Board>
    </Container>
  )
}

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0, 0.5);
`;

const Board = styled.div`
  width: 500px;
  height: 500px;
  background: white;
  border-radius: 25px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const Headline = styled.div`
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;

const ButtonWrap = styled.div`
  width: 100px;
`;

const Section = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;