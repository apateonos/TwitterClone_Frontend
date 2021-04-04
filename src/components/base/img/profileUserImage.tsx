import React from 'react';
import styled from 'styled-components';
import { baseUrl } from '../../../config/config';

interface ProfileUserImageUseProps {
  image: string;
}

export default ({ image }: ProfileUserImageUseProps) => {
  return (
    <ProfileUserImage src={image ? baseUrl + image : '/src/assets/images/default_image.jpg'}/>
  )
}

const ProfileUserImage = styled.img`
  position: absolute;
  bottom: -65px;
  left: 20px;
  width: 65px;
  height: width;
  border: 10px solid white;
  border-radius: 50%;
  background: ${props => props.theme.color.borderBackgroundGray};

  @media only screen and (min-width: 300px) {
    width: 20%;
  }
`;