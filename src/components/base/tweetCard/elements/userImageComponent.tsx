import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

interface UserImageComponentUseData {
  props: props;
}

interface props {
  userImage: string;
  userUniqueName: string;
}

export default ({ props }: UserImageComponentUseData) => {
  const { userImage, userUniqueName } = props;
  const history = useHistory();
  
  return (
    <UserImageComponent
      onClick={(event) => {event.stopPropagation(); history.push(`/${userUniqueName}`);}} 
      src={userImage ? userImage : '/src/assets/images/default_image.jpg'}
    />
  )
}

const UserImageComponent = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${props => props.theme.color.borderGray};
`;