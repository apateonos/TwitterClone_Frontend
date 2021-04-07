import { UserImage, UserName, UserUniqueName } from './index';
import { baseUrl } from '../config/config';
import React from 'react';
import styled from 'styled-components';

interface UserCardUseProps {
  user: UserCardUseData; 
}

interface UserCardUseData {
  id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
  user_profile: string;
}

export default ({ user }: UserCardUseProps) => {
  const {
    id,
    user_image,
    display_name,
    unique_name,
    user_profile
  } = user;

  return (
    <Container>
      <UserImage image={user_image ? baseUrl + user_image : ''} />
      <UserName text={display_name} />
      <UserUniqueName text={unique_name} />
      
    </Container>
  )
}

const Container = styled.div`

`;