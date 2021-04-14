import { UserImage, UserName, UserUniqueName, BlueButton } from '../index';
import { baseUrl } from '../../config/config';
import React from 'react';
import styled from 'styled-components';
import { State } from "../../store/reducers/index";
import { useSelector } from 'react-redux';
import { FollowsData } from '../../store/reducers/follow';
import { useHistory } from 'react-router';

interface UserCardUseProps {
  onClick: Function;
  user: UserCardUseData; 
}

export interface UserCardUseData {
  user_id: number;
  user_image: string;
  display_name: string;
  unique_name: string;
  user_profile: string;
}

export default ({ onClick, user }: UserCardUseProps) => {
  const history = useHistory();
  const { follows, self } = useSelector((state: State) => ({
    follows: state.followReducer.follows,
    self: state.userReducer.self.user_id
  }))
  const {
    user_id,
    user_image,
    display_name,
    unique_name,
    user_profile
  } = user;

  const isFollow = follows.find((element: FollowsData) => {
    return element.follow_user_id === user_id
  });

  return (
    <Container onClick={() => {history.push(`/profile/${unique_name}`)}}>
      <UserImageWrap>
        <UserImage image={user_image ? baseUrl + user_image : ''} />
      </UserImageWrap>
      <TextWrap>
        <UserInfoWrap>
          <UserName text={display_name} />
          <UserUniqueName text={unique_name} />
        </UserInfoWrap>
        <ProfileWrap>{user_profile}</ProfileWrap>
      </TextWrap>
      <ButtonWrap>
        {isFollow 
          ? <BlueButton onClick={onClick} name='unfollow' text='Unfollow' idx={user_id}/>
          : self === user_id
          ? ''
          : <BlueButton onClick={onClick} name='follow' text='Follow' idx={user_id}/>
        }
      </ButtonWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 8px 15px;
  background: white;
  
  :hover {
    background: linear-gradient(0.25turn, ${props => props.theme.color.white}, ${props => props.theme.color.cardHoverGray}, ${props => props.theme.color.white});
  }
`;

const UserImageWrap = styled.div`

`;

const UserInfoWrap = styled.div`
  display: flex;
  margin-bottom: 7px;

  p {
    margin-right: 2px;

    : nth-child(2) {
      margin-right: 10px;
    }
  }
`;

const TextWrap = styled.div`
  margin: 5px 0;
  padding: 0 10px;
  width: 100%;
`;

const ProfileWrap = styled.div`
  padding: 0 10px;
`;
const ButtonWrap = styled.div`

`;