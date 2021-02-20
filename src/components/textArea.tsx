import React, { useState } from 'react';
import styled from 'styled-components';

interface props {
  value: string;
  _onChangeHandler: any;
}

function TextArea ({ value, _onChangeHandler }: props ) {
  const [ height, setHeight ] = useState(29);

  const onChangeHandler = async (e: { target: HTMLTextAreaElement; }) => {
    _onChangeHandler(e);
    await setHeight(0);
    
    await setHeight(e.target.scrollHeight);
  }

  return (
    <Container
      placeholder="what?"
      value={value}
      height={`${height}px`}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeHandler(e)}
    />
  )
}

export default TextArea;

interface styledProps {
  height: string;
}

const Container = styled.textarea<styledProps>`
  height: ${props=>props.height};
  overflow: hidden;
`;