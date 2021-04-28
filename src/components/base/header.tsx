import { TitleText } from '../../atoms/text';
import React from 'react';
import styled from 'styled-components';

interface HeaderComponentUseProps {
  title: string;
}

export default ({ title }: HeaderComponentUseProps) => {
  return (
    <Header>
      <TitleText text={title} />
    </Header>
  )
}

const Header = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 0 12px;
  background: white;
  border-bottom: 1px solid black;
`;