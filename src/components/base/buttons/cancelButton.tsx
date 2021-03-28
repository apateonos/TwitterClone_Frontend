import React from 'react';
import styled from 'styled-components';
import { cancelIcon } from '../../../assets/images/svg';

interface CancelButtonUseProps {
  onClick: Function;
}

export default ({ onClick }: CancelButtonUseProps) => {
  return (
    <Button onClick={(e)=>onClick(e)}>
      {cancelIcon}
    </Button>
  )
}

const Button = styled.button`
  width: 35px;
  height: 35px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;