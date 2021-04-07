import React from 'react';
import styled from 'styled-components';
import { baseUrl } from '../../../config/config';

interface ProfileUserImageUseProps {
  image: string;
}

export default ({ image }: ProfileUserImageUseProps) => {
  return (
    <ProfileUserImage src={image ? image : '/src/assets/images/default_image.jpg'}/>
  )
}

const ProfileUserImage = styled.img`
  width: 120px;
  height: 120px;
  border: 3px solid white;
  border-radius: 50%;
  background: ${props => props.theme.color.borderBackgroundGray};
`;