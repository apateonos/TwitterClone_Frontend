import React from 'react';
import styled from 'styled-components';

interface props {
  component: any;
}
function Modal ({component}: props) {
  return (
    <Container>
      <Board>{component}</Board>
    </Container>
  )
}

export default Modal;

const Container = styled.div`
  position: fixed;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;

  background: black;
  opacity: 0.5;
`;

const Board = styled.div`
  width: 600px;
  height: 600px;
  background: white;
`;