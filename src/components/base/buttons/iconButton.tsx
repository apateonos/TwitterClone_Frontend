import React from 'react';
import styled from 'styled-components';

interface props {
  onChange: Function;
  image: any;
  accept: string;
  name: string;
  id: string;
}

export default({onChange, image, accept, name, id}: props) => {
  return (
    <>
      <ImageLabel htmlFor={id}>
        {image}
      </ImageLabel>
      <input
        id={id}
        type="file"
        accept={accept}
        name={name}
        style={{display:'none'}}
        onChange={(e)=>onChange(e)}
      />
    </>
  )
}

const Container = styled.div`
`;

const ImageLabel = styled.label`
  width: 30px;
  height: 30px;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: ${props => props.theme.color.glassBlue};
  }
  svg {
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.color.blue};
  }
`;
