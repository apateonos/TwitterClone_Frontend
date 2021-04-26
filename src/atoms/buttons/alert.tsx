import React from 'react';
import styled from 'styled-components';

interface props {
  onClick: Function;
  text: string;
  name: string;
  idx?: number;
  type?: "button"|"submit"|"reset";
  size?: "large"|"middle"|"small";
}

export default ({ onClick, text, name, type, idx, size }: props) => {
  return (
    <Button name={name} onClick={(e)=>onClick(e, idx)} type={type ? type : "button"}>
      {text}
    </Button>
  )
}

const Button = styled.button`
`;