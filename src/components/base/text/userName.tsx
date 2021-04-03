import React from 'react';
import styled from 'styled-components';

interface BoldTextComponentUseProps {
  text: string;
}

export default ({ text }:BoldTextComponentUseProps) => {
  return ( 
    <>
      <Container>{text}</Container>
    </>
  )
}

const Container = styled.span`
  font-weight: 700;
  padding: 1px;
`;