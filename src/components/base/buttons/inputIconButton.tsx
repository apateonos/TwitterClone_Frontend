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

const ImageLabel = styled.label`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  :hover {
    background: ${props => props.theme.color.glassBlue};
  }

  svg {
    width: 25px;
    height: 25px;
    fill: ${props => props.theme.color.blue};
  }
`;
