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
  width: 100%;
  border: 1px solid black;
  border-radius: 20px;
  background: white;
  color: black;
  font-weight: 700;
  padding: 7px 25px;

  margin: 4px 0;
`;