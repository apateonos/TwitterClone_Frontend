import { ImageComponent } from 'components';
import React from 'react'
import styled from 'styled-components';

interface ImageComponentUseProps { 
  image: string;
}
export default ({ image }: ImageComponentUseProps) => {
  return (
    <Container>
      <Image src={image}/>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 50px;
  height: 300px;
  border: 2px solid ${props => props.theme.color.borderGray};
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;