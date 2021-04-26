import React from 'react';
import styled from 'styled-components';
import { baseURL } from '../../config/config';

interface IconButtonUseData {
  onClick: Function;
  name: string;
  color: string;
  image: any;
  count?: number;
  idx?: number;
}

export default ({ onClick, name, color, image, count, idx }: IconButtonUseData) => {
  return (
    <ToolButton onClick={(e) => onClick(e, idx)} name={name} color={color}>
      <Image src={image ? baseURL+image : ''} />
      {count && <TextBox>{count}</TextBox>}
    </ToolButton>
  )
}

const ToolButton = styled.button`
`;

const Image = styled.img`
`;

const TextBox = styled.span`
`;
