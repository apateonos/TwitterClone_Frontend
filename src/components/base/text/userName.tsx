import React from 'react';
import styled from 'styled-components';

interface BoldTextComponentUseProps {
  text: string;
  type?: 'normal'|'large';
}

export default ({ text, type }:BoldTextComponentUseProps) => {
  const fontSize = {
    large: '20px',
    normal: '16px'
  }

  return ( 
    <Container fontSize={type ? fontSize[type] : fontSize.normal} >{text}</Container>
  )
}

interface StyledUseProps {
  fontSize: string;
}
const Container = styled.p<StyledUseProps>`
  font-size: ${props => props.fontSize};
  font-weight: 700;
  padding: 1px;
  word-break: break-all;
`;