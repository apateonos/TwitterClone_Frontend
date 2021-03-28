import React from 'react';
import styled from 'styled-components';

interface UserImageComponentUseProps {
  image: string;
}

export default ({ image }: UserImageComponentUseProps) => {
  return (
    <UserImage src={image ? image : '/src/assets/images/default_image.jpg'}/>
  )
}

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
