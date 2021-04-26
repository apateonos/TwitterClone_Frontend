import React from 'react';
import styled from 'styled-components';

interface IconButtonUseData {
  onClick: Function;
  name: string;
  count: number;
  text: string;
  idx?: number;
}

export default ({ onClick, name, count, text, idx }: IconButtonUseData) => {
  return (
    <CountButton onClick={(e) => onClick(e, idx)} name={name} >
      <Count>{count}</Count>
      <Text>{text}</Text>
    </CountButton>
  )
}

const CountButton = styled.button``;
const Count = styled.span``;
const Text = styled.span``;

