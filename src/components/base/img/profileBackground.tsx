import React from 'react';
import styled from 'styled-components';

interface ProfileBackgroundUseProps {
  image: string;
}

export default ({ image }: ProfileBackgroundUseProps) => {
  return (
      <ProfileBackground src={image ? image : '/src/assets/images/background_image.jpg'}/>    
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const ProfileBackground = styled.img`
  width: 100%;
  max-height: 100%;
  background: #efefef;
  border: none;
`;