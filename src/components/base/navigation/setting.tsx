import React from 'react';
import styled from 'styled-components';
import { UserImageComponent, GrayTextComponent, BoldTextComponent } from '../../index';

interface SettingComponentUseData {
  self: SelfProps;
}

export interface SelfProps {
  userName: string;
  userUniqueName: string;
  userImage: string;
}

export default ({ self }: SettingComponentUseData) => {
  const { userImage, userName, userUniqueName } = self;
  return (
    <Container>
      <UserImageComponent image={userImage ? userImage : '/src/assets/images/default_image.jpg'} />
      <UserInforamtionComponent>
        <BoldTextComponent text={userName}/>
        <GrayTextComponent text={userUniqueName}/>
      </UserInforamtionComponent>
    </Container>
  )
}

const Container = styled.button`
  position: fixed;
  bottom: 20px;
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 5px;
  padding: 10px;
  :hover {
    background: ${props => props.theme.color.glassBlue};
  }

  @media only screen and (min-width: 1280px) {
    width: 260px;
  }
`;

const UserInforamtionComponent = styled.div`
  display: none;
  margin-left: 10px;

  @media only screen and (min-width: 1280px) {
    display: block;
  }
`;