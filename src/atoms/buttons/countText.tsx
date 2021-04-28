import React from 'react';
import styled from 'styled-components';
import { useClick } from '../../handler/index';

interface IconButtonUseData {
  name: string;
  count: number;
  text: string;
  idx?: any;
}

export default ({ name, count, text, idx }: IconButtonUseData) => {
  const onClickHandler = useClick();
  return (
    <CountButton onClick={(e) => onClickHandler(e, idx)} name={name} >
      <Count>{count}</Count>
      <Text>{text}</Text>
    </CountButton>
  )
}

const CountButton = styled.button``;
const Count = styled.span``;
const Text = styled.span``;

