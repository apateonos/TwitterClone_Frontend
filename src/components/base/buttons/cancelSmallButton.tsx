import { CancelButton } from 'components';
import React from 'react';
import styled from 'styled-components';
import { cancelButtonIcon } from '../../../assets/images/svg';

interface CancelButtonUseProps {
  onClick: Function;
  name: string;
  idx?: number;
  type?: 'button'|'submit';
}

export default ({ onClick, name, idx, type }: CancelButtonUseProps) => {
  return (
    <Button onClick={(e)=>onClick(e, idx)} name={name} type={type ? type : 'button'}>
      {cancelButtonIcon}
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  background: ${props => props.theme.color.blue};
  border-radius: 50%;

  padding: 0;

  svg {
    width: 15px;
    height: 15px;
    fill: white;
  }
`;