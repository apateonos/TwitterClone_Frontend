import React from 'react';
import styled from 'styled-components';

interface props {
  image: any;
}
function UserImage({ image }: props) {
  
  return (
    <Img/>
  )
}

export default UserImage;

const Img = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 100%;
  background: #efefef;
`;