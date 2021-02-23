import React from 'react';
import styled from 'styled-components';

interface props {
  onClick: any;
  image: string;
}
function MobileButton ({ image, onClick }:props ) {
  return (
    <Button onClick={onClick}>
      {image}
    </Button>
  )
}

export default MobileButton;

const Button = styled.button`
  width: 24px;
  height: 24px;
`;