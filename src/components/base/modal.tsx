import { EmphasisButton } from '../../atoms/buttons';
import React from 'react';
import styled from 'styled-components';

interface ModalComponentUseProps {
  component: JSX.Element;
}
export default ({ component }: ModalComponentUseProps) => {
  return (
    <div>
      <div>
        <EmphasisButton name='close' text='Back' />
      </div>
      {component}
    </div>
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
  width: 500px;
  background: white;
  border-radius: 25px;
  overflow: hidden;

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

const Section = styled.section`
`;