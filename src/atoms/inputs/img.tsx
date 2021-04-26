import React from 'react';
import styled from 'styled-components';

interface props {
  onChange: Function;
  image: any;
  accept: string;
  name: string;
}

export default ({ onChange, image, accept, name }: props) => {
  return (
    <>
      <label htmlFor={name}>
        <Image src={image} />
      </label>
      <input
        id={name}
        type="file"
        accept={accept}
        name={name}
        style={{display:'none'}}
        onChange={(e)=>onChange(e)}
      />
    </>
  )
}

const Image = styled.img``;
