import React from 'react';
import styled from 'styled-components';

interface props {
  onChange: Function;
  name: string;
  value: string;
  placeholder: string;
}

export default ({onChange, name, value, placeholder}: props) => {
  return (
    <Input onChange={(e)=>onChange(e)} name={name} value={value} placeholder={placeholder}/>
  )
}

const Input = styled.input`
  margin: 5px 0;
  width: 100%;
  border: 1px solid ${props => props.theme.color.blue};
  border-radius: 25px;
  padding: 7px 21px;
`;