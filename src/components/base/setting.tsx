import React from 'react';
import styled from 'styled-components';
import { UserImage, UserUniqueName, UserName } from '../index';

interface SettingComponentUseData {
  self: SelfProps;
}

export interface SelfProps {
  user_image: string;
  display_name: string;
  unique_name: string;
}
export default ({ self }: SettingComponentUseData) => {
  const { user_image, display_name, unique_name } = self;
  return (
    <Container>
      <UserImage image={user_image ? user_image : '/src/assets/images/default_image.jpg'} />
      <UserInforamtionComponent>
        <UserName text={display_name}/>
        <UserUniqueName text={unique_name}/>
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