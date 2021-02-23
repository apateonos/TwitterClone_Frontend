import React from 'react';
import styled from 'styled-components';

interface props {
  image: any;
  number: number;
  color: string;
}

function TwitToolButton ({image, number, color}: props) {
  
  return (
    <Container color={color}>
      <Icon>{image}</Icon>
      <Number>{number}123</Number>
    </Container>
  )
}

export default TwitToolButton;

interface styledProps {
  color: string;
}

const Container = styled.div<styledProps>`
  display: flex;
  align-items: center;
  
  transition-duration: 0.4s;
  :hover {
    button {
      background: ${props => props.color};

      svg{
        
      }
    }
    div {
      color: ${props => props.color};
    }
  }
`;

const Icon = styled.button`
  width: 24px;
  height: 24px;

  border-radius: 12px;
  transition-duration: 0.4s;
`;

const Number = styled.div`
  padding: 0 5px;
  color: gray;
  transition-duration: 0.4s;
`;

const Temp = styled.div`
  width: 18.5px;
  height: 18.5px;
  background: black;
`;