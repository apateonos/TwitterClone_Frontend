import { CountTextButton, EmphasisButton } from '../atoms/buttons';
import { ProfileImage, UserImage } from '../atoms/imgs';
import { UserNameText, UniqueNameText, ProfileText } from '../atoms/text';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SelfData } from 'store/reducers/user';
import { FollowsData } from 'store/reducers/follow';

interface ProfileUseProps {
  self: SelfData;
  follows: Array<FollowsData>;
  user: ProfileUseData;
  following: Array<any>;
  follower: Array<any>;
}

interface ProfileUseData {
  user_id: number;
  user_image: string;
  user_name: string;
  unique_name: string;
  profile: string;
  created_at: string;
}


const initialState = { isFollow: false, isSelf: false };
export default ({ self, follows, user, following, follower }: ProfileUseProps) => {
  const { user_id, user_image, unique_name, user_name, profile } = user;
  const [ state, inputState ] = useState(initialState);

  useEffect(() => {
    const isFollow = follows.some(fu => fu.user_id === user_id);
    const isSelf = self.user_id !== undefined && self.user_id === user_id;
    inputState({ ...state, isSelf, isFollow });
  }, [follows, self]);

  return (
    <Container>
      <ProfileBackground>
        <ProfileImageWrap>
          <ProfileImage image={user_image} />
        </ProfileImageWrap>
      </ProfileBackground>
      <ProfileWrap>
        <ButtonWrap>
          <div>
          {state.isSelf 
            ? <EmphasisButton name='setting' text='Setting' />
            : state.isFollow
              ? <EmphasisButton name='unfollow' idx={user_id} text='Unfollow' />
              : <EmphasisButton name='follow' idx={user_id} text='Follow' />
          }
          </div>
        </ButtonWrap>
        <UserNameText text={user_name} />
        <UniqueNameText text={unique_name} />
        <ProfileText text={profile} />
      </ProfileWrap>
      <CountTextButtonWrap>
        <CountTextButton name='userlist' count={following !== undefined ? following.length : 0} idx={following} text='Following'/>
        <CountTextButton name='userlist' count={follower !== undefined ? follower.length: 0} idx={follower} text='Follower' />
      </CountTextButtonWrap>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid black;
`;

const ProfileBackground = styled.div`
  position: relative;
  height: 150px;
  background: gray;
`;

const ProfileImageWrap = styled.div`
  position: absolute;
  left: calc(50% - 50px);
  bottom: 10px;

  @media only screen and ( min-width: 350px ) {
    bottom: -50px;
    left: 50px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProfileWrap = styled.div`
  padding: 9px 17px;
`;

const CountTextButtonWrap = styled.div`
  padding: 4px;
  border-top: 1px solid black;
`;