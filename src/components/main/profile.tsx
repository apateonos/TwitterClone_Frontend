
import React from 'react';
import user from 'store/sagas/user';
import styled from 'styled-components';
import { ProfileBackground, ProfileUserImage, WhiteButton, UserName, UserUniqueName, ProfileText, CountButton } from '../index';
import { baseUrl } from '../../config/config';

interface ProfileUseProps {
  onClick: Function;
  isUser: boolean;
  isFollow: boolean;
  isSelf: boolean;
  userUniqueName: string;
  user: ProfileUseData;
  following: Array<ProfileFollowingUseData>;
  follower: Array<ProfileFollowerUseData>;
}

export interface ProfileUseData {
  user_id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
  user_profile: string;
  created_at: string;
}

export interface ProfileFollowingUseData {
  user_id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
}

export interface ProfileFollowerUseData {
  user_id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
}

export default ({ onClick, isUser, isFollow, isSelf, user, follower, following, userUniqueName }: ProfileUseProps) => {
  const { 
    user_id,
    user_image,
    display_name,
    unique_name,
    user_profile,
    created_at
  } = user;

  return (
    <Container>
      <BackgroundImageWrap>
        <ImageWrap>
          <ProfileUserImage image={user_image ? baseUrl + user_image : ''} />
        </ImageWrap>
      </BackgroundImageWrap>
      {isUser
        ? 
        <ProfileWrap>
          <ButtonBox>
            <ButtonWrap>
              {
                isSelf
                ? <WhiteButton name='setting' onClick={onClick} idx={user_id} text='Setting'/>              
                : isFollow
                ? <WhiteButton name='unfollow' onClick={onClick} idx={user_id} text='Unfollow'/> 
                : <WhiteButton name='follow' onClick={onClick} idx={user_id} text='Follow'/>
              }
            </ButtonWrap>
          </ButtonBox>
          <UserInfoWrap>
            <UserName text={display_name} type='large'/>
            <UserUniqueName text={unique_name} />
          </UserInfoWrap>
          <ProfileText text={user_profile}/>
          <CountButtonWrap>
            <CountButton onClick={onClick} count={follower.length} name='follower' text='follower' />
            <CountButton onClick={onClick} count={following.length} name='following' text='following' />
          </CountButtonWrap>
        </ProfileWrap>
        : 
        <ProfileWrap>
          <ButtonWrap>            
          </ButtonWrap>
          <UserInfoWrap>
            <UserName text={'@' + userUniqueName} type='large'/>
          </UserInfoWrap>
        </ProfileWrap>
      }
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  background: white;

  margin-bottom: 10px;
`;

const BackgroundImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 200px;
  padding: 15px;
  background: gray;
`;

const ImageWrap = styled.div`
  @media only screen and (min-width: 300px) {  
    position: absolute;
    bottom: -65px;
    left: 20px;
  }
`;

const ProfileWrap = styled.div`
  margin: 10px 0;
  padding: 0 25px;
  padding-bottom: 18px;
`;

const UserInfoWrap = styled.div`
  margin-bottom: 15px;

  p: first-child {
    margin-bottom: 4px;
  }
`;

const ButtonWrap = styled.div`
  width: 120px;
  height: 50px;
  margin: 9px 0;
`;

const CountButtonWrap = styled.div`
  padding: 5px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  
  @media only screen and (min-width: 300px) {
    justify-content: flex-end;
  } 
`;