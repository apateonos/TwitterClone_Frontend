import React, { useState } from 'react';
import styled from 'styled-components';

interface props {
  value: string;
  _onChangeHandler: any;
}

function TextArea ({ value, _onChangeHandler }: props ) {
  const [ height, setHeight ] = useState(29);

  const onChangeHandler = async (e: HTMLTextAreaElement ) => {
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

const Container = styled.textarea`
  height: ${props=>props.height};
  overflow: hidden;
`;