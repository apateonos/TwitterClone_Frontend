import { EmphasisButton } from '../../atoms/buttons';
import React from 'react';
import styled from 'styled-components';

interface ModalComponentUseProps {
  component: JSX.Element;
}
export default ({ component }: ModalComponentUseProps) => {
  return (
    <Container>
      <Board>
        <Headline>
          <EmphasisButton name='close' text='Back' />
        </Headline>
        <ComponentWrap>
          {component}
        </ComponentWrap>
      </Board>
    </Container>
  )
}

const Container = styled.div`
  z-index: 9999;
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
  background: white;
  width: 100%;
  height: 100vh;

  @media only screen and ( min-width: 500px ) {
    width: 500px;
    height: auto;
    border-radius: 25px;
  }
`;

const Headline = styled.div`
  width: 100%;
  height: 50px;
  padding: 5px 10px;
`;

const ComponentWrap = styled.div`
  width: 100%;
  padding: 10px 15px;
`;

const Section = styled.section`
`;