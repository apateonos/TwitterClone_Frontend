import React from 'react';
import styled from 'styled-components';

interface props {
  self: any;
}

export default ({ self }: props) => {
  const { userImage } = self;
  return (
    <Button>
      <UserImage src={userImage ? userImage : '/src/assets/images/default_image.jpg'}/>
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 20px;
  :hover {
    background: ${props => props.theme.color.glassBlue};
  }
`;

const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;