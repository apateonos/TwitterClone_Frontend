import { messageIcon } from '../../../assets/images/svg';
import React from 'react';
import styled from 'styled-components';

interface InfoButtonUseData {
  onClick: Function;
  name: string;
}
export default ({ onClick, name }: InfoButtonUseData) => {
  return (
    <Button onClick={(e)=> onClick(e)} name={name}>{messageIcon.exit}</Button>
  )
}

const Button = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50px;

  svg {
    width:25px;
    height: 25px;
  }
`;