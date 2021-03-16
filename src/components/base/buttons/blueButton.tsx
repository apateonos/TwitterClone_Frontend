import React from 'react';
import styled from 'styled-components';

interface props {
  onClick: Function;
  text: string;
  name: string;
  type?: "button"|"submit"|"reset";
}

export default ({ onClick, text, name, type }: props) => {
  return (
    <Button name={name} onClick={(e)=>onClick(e)} type={type ? type : "button"}>
      {text}
    </Button>
  )
}

const Button = styled.button`
  width: 100%;
  border-radius: 25px;
  padding: 8px 16px;

  color: white;
  font-weight: 800;
  background: ${props => props.theme.color.blue};

  transition-duration: 0.5s;
  :hover {
    background: ${props => props.theme.color.skyBlue};
  }
`;