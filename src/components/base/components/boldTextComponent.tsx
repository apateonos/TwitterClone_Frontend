import React from 'react';
import styled from 'styled-components';

interface BoldTextComponentUseProps {
  text: string;
}

export default ({ text }:BoldTextComponentUseProps) => {
  return ( 
    <>
      <TextBox id='name'>{text}</TextBox>
    </>
  )
}

const TextBox = styled.span`
  font-weight: 700;
  padding: 1px;
`;