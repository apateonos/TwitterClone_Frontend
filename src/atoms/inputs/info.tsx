import React from 'react';
import styled from 'styled-components';

interface props {
  onChange: Function;
  name: string;
  value: string;
  placeholder: string;
  type?: string;
}

export default ({onChange, name, value, placeholder, type}: props) => {
  return (
    <Input onChange={(e)=>onChange(e)} type={type ? type : 'text'} name={name} value={value} placeholder={placeholder}/>
  )
}

const Input = styled.input`
  width: 100%;
  border: 1px solid black;
  border-radius: 20px;
  padding: 6px 17px;
  margin: 4px 0;
`;