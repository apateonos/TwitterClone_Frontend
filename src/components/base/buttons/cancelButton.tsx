import { CancelButton } from 'components';
import React from 'react';
import styled from 'styled-components';
import { cancelButtonIcon } from '../../../assets/images/svg';

interface CancelButtonUseProps {
  onClick: Function;
  name: string;
  idx?: number;
}

export default ({ onClick, name, idx }: CancelButtonUseProps) => {
  return (
    <Button onClick={(e)=>{e.stopPropagation(); onClick(e, idx)}} name={name}>
      {cancelButtonIcon}
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