import React from 'react';
import styled from 'styled-components';
import { baseUrl } from '../../../config/config';

interface ProfileBackgroundUseProps {
  image: string;
}

export default ({ image }: ProfileBackgroundUseProps) => {
  return (
      <ProfileBackground src={image ? image : '/src/assets/images/background_image.jpg'}/>    
  )
}

const ProfileBackground = styled.img`
  width: 100%;
  max-height: 100%;
  background: #efefef;
  border: none;
`;