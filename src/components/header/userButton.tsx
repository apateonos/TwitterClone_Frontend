import { UserImage } from '../index';
import React from 'react';
import styled from 'styled-components';

function UserButton () {
  return (
    <Container>
      <UserImageWrap>
        <UserImage image=''/>
      </UserImageWrap>
      
      <UserInfoWrap>

      </UserInfoWrap>
    </Container>
  )
}

export default UserButton;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  margin: 15px 0;
  border-radius: 30px;

  :hover {
    background: #1da1f21a;
  }

  @media only screen and ( min-width: 1280px ) {
    width: auto;
  }
`;

const UserImageWrap = styled.div`
  min-width: 40px;
  height: 40px;

  margin: 10px;
`;

const UserInfoWrap = styled.div`
  width: 180px;
  height: 40px;

  @media only screen and ( max-width: 1280px ) {
    display: none;
  }
`;