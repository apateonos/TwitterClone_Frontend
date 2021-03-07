import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface props {
  value: string;
  onChange: Function;
  placeholder: string;
  height: number;
  name: string;
}

const init = {
  height: 30,
};

export default({ onChange, value, placeholder, height=init.height, name }: props ) => {
  const [ currentHeight, setCurrentHeight ] = useState(0);

  const onChangeHandler = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event);
    await setCurrentHeight(0);
    await setCurrentHeight(event.target.scrollHeight);
  }

  useEffect(()=>{
    setCurrentHeight(height);
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
  height: ${props=>props.height}px;
  width: 100%;
  overflow: hidden;
  resize:none;
`;