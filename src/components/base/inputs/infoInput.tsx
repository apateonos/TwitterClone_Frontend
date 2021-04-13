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
    <InfoInput onChange={(e)=>onChange(e)} type={type ? type : 'text'} name={name} value={value} placeholder={placeholder}/>
  )
}

const InfoInput = styled.input`
  margin: 5px 0;
  width: 100%;
  border: 1px solid ${props => props.theme.color.blue};
  border-radius: 25px;
  padding: 7px 21px;
`;