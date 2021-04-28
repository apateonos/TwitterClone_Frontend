import React from 'react';
import styled from 'styled-components';
import { useClick } from '../../handler/index';

interface IconButtonUseData {
  name: string;
  color: string;
  icon: JSX.Element;
  count?: number;
  idx?: number;
}

export default ({ name, color, icon, count, idx }: IconButtonUseData) => {
  const onClickHandler = useClick();

  return (
    <ToolButton onClick={(e) => onClickHandler(e, idx)} name={name} color={color}>
      <Icon>{icon}</Icon>
      {count && <TextBox>{count}</TextBox>}
    </ToolButton>
  )
}

const ToolButton = styled.button`
`;

const Icon = styled.div`
`;

const TextBox = styled.span`
`;
