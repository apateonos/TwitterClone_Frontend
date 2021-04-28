import { useClick } from '../../handler/index';
import React from 'react';
import styled from 'styled-components';

interface props {
  text: string;
  name: string;
  idx?: number;
  type?: "button"|"submit"|"reset";
  size?: "large"|"middle"|"small";
}

export default ({ text, name, type, idx, size }: props) => {
  const onClickHandler = useClick();
  return (
    <Button name={name} onClick={type==='submit'? ()=> {}: (e)=> onClickHandler(e, idx)} type={type ? type : "button"}>
      {text}
    </Button>
  )
}

const Button = styled.button`
`;