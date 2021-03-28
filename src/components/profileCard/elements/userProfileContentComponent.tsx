import React from 'react';
import styled from 'styled-components';
import { GrayTextComponent } from '../../index';

interface UserProfileImageComponent {
  userName: string;
  userUniqueName: string;
  profile: string;
}

export default ({ userName, userUniqueName, profile }: UserProfileImageComponent) => {
  return (
    <Container>
      <UserDisplayName>{userName}</UserDisplayName>
      <GrayTextComponent text={userUniqueName} />
      <Profile>{profile}</Profile>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 10px 25px 0 25px;
  margin-bottom: 10px;
  background: white;
`;

const UserDisplayName = styled.h2`
  padding: 5px 0;
  font-size: 24px;
  font-weight: 800;
`;

const Profile = styled.div`
  padding: 8px 0;
  Word-break: break-all;
`;