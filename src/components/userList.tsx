import React from 'react';
import styled from 'styled-components';
import { UserCardUseData } from './userCard';
import { UserCard } from './index';

interface UserListUseProps {
  users: Array<UserCardUseData>;
}

export default ({ users }: UserListUseProps) => {
  return (
    <Container>
      {
        users.length > 0 
          ? users.map((el, idx)=> <UserCard user={el} key={idx} />)
          : ''
      }
    </Container>
  )
}

const Container = styled.section`
`;