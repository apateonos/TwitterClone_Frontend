import { EmphasisButton } from '../atoms/buttons';
import { UserNameText, UniqueNameText, ProfileText } from '../atoms/text';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FollowsData } from '../store/reducers/follow';
import { useSelector } from 'react-redux';
import { State } from '../store/reducers';
import { SelfData } from '../store/reducers/user';
import { UserImage } from '../atoms/imgs';

interface UserCardUseProps {
  user: UserCardUseData;
}

export interface UserCardUseData {
  user_id: number;
  user_image: string;
  user_name: string;
  unique_name: string;
  profile: string;
}

interface Selector {
  self: SelfData;
  follows: Array<FollowsData>;
}

const initialState = { isSelf: false, isFollow: false};
export default ({ user }: UserCardUseProps) => {
  const { user_id, user_image, user_name, unique_name, profile } = user;
  const { self, follows }: Selector = useSelector((state: State) => ({ self: state.userReducer.self, follows: state.followReducer.follows }))
  const [ state, inputState ] = useState(initialState);

  useEffect(() => {
    const isFollow = follows.some(fu => fu.user_id === user_id);
    const isSelf = self.user_id !== undefined && self.user_id === user_id;
    inputState({ ...state, isSelf, isFollow });
  }, [follows, self]);

  return (
    <Container>
      <UserWrap>     
        <UserImageWrap>
          <UserImage image={user_image} to={unique_name} />
        </UserImageWrap>
        <UserTextWrap>
          <UserInfoWrap>
            <UserNameText text={user_name} to={unique_name} />
            <UniqueNameText text={unique_name} to={unique_name} />
          </UserInfoWrap>
          <ProfileText text={profile} />
        </UserTextWrap>
      </UserWrap>
      <ButtonWrap>
        {state.isSelf 
          ? ''
          : state.isFollow
            ? <EmphasisButton name='unfollow' idx={user_id} text='Unfollow' />
            : <EmphasisButton name='follow' idx={user_id} text='Follow' />
        }
      </ButtonWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserImageWrap = styled.div`
  margin-right: 6px;
`;

const UserWrap = styled.div`
  display: flex;
`;

const UserTextWrap = styled.div``;

const UserInfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonWrap = styled.div``;