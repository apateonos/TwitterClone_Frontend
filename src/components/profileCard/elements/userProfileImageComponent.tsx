import React from 'react';
import styled from 'styled-components';

interface UserProfileContentComponent {
  userImage: string;
  userBackgroundImage: string;
}

export default ({ userImage, userBackgroundImage }: UserProfileContentComponent) => {
  return (
    <Container>
      <UserProfileBackgroundImage src={userBackgroundImage ? userBackgroundImage : '/src/assets/images/background_image.jpg'}/>
      <UserImage src={userImage ? userImage : '/src/assets/images/default_image.jpg'} />
    </Container>     
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const UserProfileBackgroundImage = styled.img`
  width: 100%;
  max-height: 100%;
  background: #efefef;
  border: none;
`;

const UserImage = styled.img`
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
