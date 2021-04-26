import { EmphasisButton } from '../atoms/buttons';
import { UserNameText, UniqueNameText, ProfileText } from '../atoms/text';
import React from 'react';
import styled from 'styled-components';

interface UserCardUseProps {
  onClick: Function;
  user: UserCardUseData; 
}

export interface UserCardUseData {
  user_id: number;
  user_image: string;
  user_name: string;
  unique_name: string;
  profile: string;
}

export default ({ onClick, user }: UserCardUseProps) => {
  const { user_id, user_image, user_name, unique_name, profile } = user;
  return (
    <Container>
      <UniqueNameText text={unique_name} />
      <UserNameText text={user_name} />
      <ProfileText text={profile} />
      <EmphasisButton onClick={onClick} text='Follow' name='follow'/>
    </Container>
  )
}

const Container = styled.div``;
