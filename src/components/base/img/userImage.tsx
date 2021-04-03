import React from 'react';
import styled from 'styled-components';

interface UserImageUseProps {
  image: string;
  type?: 'large'|'normal';
}

export default ({ image, type }: UserImageUseProps) => {
  const imageSize = {
    large: '50px',
    normal: '40px'
  }
  return (
    <UserImage imageSize={type ? imageSize[type] : imageSize.normal} src={image ? image : '/src/assets/images/default_image.jpg'} />
  )
}

interface StyledUseProps {
  imageSize: string;
}
const UserImage = styled.img<StyledUseProps>`
  width: ${props => props.imageSize};
  height: width;

  border-radius: 50%;
  background: ${props => props.theme.color.borderGray};
`;