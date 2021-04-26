import React from 'react';
import styled from 'styled-components';

interface IconButtonUseData {
  onClick: Function;
  name: string;
  color: string;
  icon: JSX.Element;
  count?: number;
  idx?: number;
}

export default ({ onClick, name, color, icon, count, idx }: IconButtonUseData) => {
  return (
    <ToolButton onClick={(e) => onClick(e, idx)} name={name} color={color}>
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
