
import React from 'react';
import styled from 'styled-components';
import { ProfileBackground, ProfileUserImage, WhiteButton, UserName, UserUniqueName, ProfileText } from './index';

interface ProfileUseProps {
  onClick: Function;
  isFollow: boolean;
  isSelf: boolean;
  user: ProfileUseData;
}

export interface ProfileUseData {
  userNumber: number;
  profileBackground: string;
  userImage: string;
  userName: string;
  userUniqueName: string;
  profile: string;
  userCreatedTime: string;
  userFollowerNumber: number;
  userFollowingNumber: number;
}

export default ({ onClick, isFollow, isSelf, user }: ProfileUseProps) => {
  const { 
    userNumber,
    profileBackground,
    userImage,
    userName,
    userUniqueName,
    profile,
    userCreatedTime,
    userFollowerNumber,
    userFollowingNumber
  } = user;

  return (
    <Container>
      <ImageWrap>
        <ProfileBackground image={profileBackground} />
        <ProfileUserImage image={userImage} />
      </ImageWrap>
      <ButtonWrap>
        {
          isSelf
          ? <WhiteButton name='setting' onClick={onClick} idx={userNumber} text='Setting'/>              
          : isFollow
          ? <WhiteButton name='unfollow' onClick={onClick} idx={userNumber} text='Unfollow'/> 
          : <WhiteButton name='follow' onClick={onClick} idx={userNumber} text='Follow'/>
        }
      </ButtonWrap>
      <UserName text={userName}/>
      <UserUniqueName text={userUniqueName} />
      <ProfileText text={profile}/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  background: white;

  margin-bottom: 10px;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const ButtonWrap = styled.div`
  width: 120px;
  padding: 10px;
`;