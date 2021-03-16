import React from 'react';
import styled from 'styled-components';

interface props {
  text: string;
}

export default ({ text }:props) => {
  return ( 
    <>
      <TextBox>{text}</TextBox>
    </>
  )
}

const TextBox = styled.span`
  font-weight: 700;
  padding: 1px;
`;