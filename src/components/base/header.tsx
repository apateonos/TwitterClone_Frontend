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

const Header = styled.header``;