import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface props {
  value: string;
  onChange: any;
}

function TextArea ({ value, onChange }: props ) {
  const [ height, setHeight ] = useState(29);

  useEffect(()=> {
    console.log(height);
  },[height]);

  const onChangeHandler = async (e) => {
    onChange(e);
    console.log('hello');
    await setHeight(0);
    await setHeight(e.target.scrollHeight);
  }

  return (
    <Container
      placeholder="what?"
      value={value}
      height={height}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeHandler(e)}
    />
  )
}

export default TextArea;

interface styledProps {
  height: number;
}

const Container = styled.textarea<styledProps>`
  height: ${props=>props.height}px;
  width: 100%;
  overflow: hidden;
`;