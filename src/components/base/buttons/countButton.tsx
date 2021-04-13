import React from 'react';
import styled from 'styled-components';

interface CountButtonUseProps {
  onClick: Function;
  name: string;
  count: number;
  text: string;
}
export default ({ onClick, name, count, text }: CountButtonUseProps) => {
  return (
    <CountButton onClick={(e) => onClick(e)} name={name}>
      <Count>{count}</Count>
      <Text>{text}</Text>
    </CountButton>
  )
}

const CountButton = styled.button`

`;

const Count = styled.span`
  font-weight: 800;
  font-size: 18px;
`;

const Text = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.grayText};
`;