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
    <Container>
      <ImageLabel htmlFor={id}>
        {image}
      </ImageLabel>
      <input
        id={id}
        type="file"
        accept={accept}
        name={name}
        style={{opacity:0}}
        onChange={(e)=>onChange(e)}
      />
    </Container>
  )
}

const Container = styled.div`
`;

const ImageLabel = styled.label`
  svg {
    width: 24px;
    height: 24px;
  }
`;
