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

const CountButton = styled.button`
  padding: 1.2px 4px;
`;

const Count = styled.span`
  font-size: 17.5px;
  font-weight: 800;
  margin-right: 1.4px;
`;

const Text = styled.span`
  font-size: 17.5px;
`;

