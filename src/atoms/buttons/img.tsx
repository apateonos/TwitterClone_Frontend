import React from 'react';
import styled from 'styled-components';
import { baseURL } from '../../config/config';
import { useClick } from '../../handler/index';

interface IconButtonUseData {
  name: string;
  color: string;
  image: any;
  count?: number;
  idx?: number;
}

export default ({ name, color, image, count, idx }: IconButtonUseData) => {
  const onClickHandler = useClick();
  return (
    <ToolButton onClick={(e) => onClickHandler(e, idx)} name={name} color={color}>
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
