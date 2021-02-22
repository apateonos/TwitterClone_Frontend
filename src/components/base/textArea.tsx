import React, { useState } from 'react';
import styled from 'styled-components';

interface props {
  value: string;
  onChange: any;
}

function TextArea ({ value, onChange }: props ) {
  const [ height, setHeight ] = useState(29);

  const _onChangeHandler = async (e: { target: HTMLTextAreaElement; }) => {
    console.log('change!');
    onChange(e);
    await setHeight(0);
    
    await setHeight(e.target.scrollHeight);
  }

  return (
    <Container
      placeholder="what?"
      value={value}
      height={height}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => _onChangeHandler(e)}
    />
  )
}

export default TextArea;

interface styledProps {
  height: number;
}

const Container = styled.textarea<styledProps>`
  height: ${props=>props.height}px;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;