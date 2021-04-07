import React from 'react';
import styled from 'styled-components';

interface props {
  onClick: Function;
  text: string;
  name: string;
  type?: "button"|"submit"|"reset";
  idx?: number;
}

export default ({ onClick, text, name, type, idx }: props) => {
  return (
    <Button name={name} onClick={(e)=>onClick(e, idx)} type={type ? type : "button"}>
      {text}
    </Button>
  )
}

const Button = styled.button`
  width: 100%;
  border: 1px solid ${props => props.theme.color.blue};
  border-radius: 25px;
  padding: 7px 15px;

  font-weight: 800;
  color: ${props => props.theme.color.blue};
  background: ${props => props.theme.color.white};

  transition-duration: 0.5s;
  :hover {
    color: white;
    border: 1px solid ${props => props.theme.color.skyBlue};
    background: ${props => props.theme.color.skyBlue};
  }
`;