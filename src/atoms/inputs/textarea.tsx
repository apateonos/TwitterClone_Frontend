import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface AreaInputUseProps {
  value: string;
  onChange: Function;
  placeholder: string;
  height?: number;
  name: string;
}


export default ({ onChange, value, placeholder, name, height }: AreaInputUseProps) => {
  const [ currentHeight, setCurrentHeight ] = useState('auto') as any;

  const onChangeHandler = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event);
    await setCurrentHeight(0);
    await setCurrentHeight(event.target.scrollHeight);
  }

  useEffect(()=>{
    if (height) setCurrentHeight(height);
  }, [])

  return (
    <TextAreaInput
      placeholder={placeholder}
      name={name}
      value={value}
      height={currentHeight}
      onChange={(e) => onChangeHandler(e)}
    />
  )
}

interface styledProps {
  height: number;
}

const TextAreaInput = styled.textarea<styledProps>`
  width: 100%;
  height: ${props=>props.height}px;
`;