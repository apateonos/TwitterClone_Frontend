import React from 'react';
import styled from 'styled-components';

interface GrayTextComponentUseProps {
  text: string;
}
export default ({text}:GrayTextComponentUseProps) => {
  return (
    <TextBox >@{text}</TextBox>
  )
}

const TextBox = styled.p`
  color: ${props=> props.theme.color.grayText};
  padding: 1px;
`;