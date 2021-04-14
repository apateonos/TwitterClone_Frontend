import { UserImage, UserName, UserUniqueName } from '../index';
import React from 'react';
import styled from 'styled-components';
import { baseUrl } from '../../config/config';
import { useHistory } from 'react-router';

interface RoomCardUseProps {
  onClick: Function;
  data: RoomCardUseData;
}

export interface RoomCardUseData {
  user_image: string;
  display_name: string;
  unique_name: string;
  room_id: string;
}

export default ({ onClick, data }: RoomCardUseProps) => {
  const {
    user_image,
    display_name,
    unique_name,
    room_id
  } = data;
  const history = useHistory();
  return (
    <Container onClick={() => history.push(`/message/${room_id}`)}>
      <UserImageWrap>
        <UserImage image={user_image ? baseUrl+user_image : ''} type='large' />
      </UserImageWrap>
      <UserInfoWrap>
        <UserName text={display_name} />
        <UserUniqueName text={unique_name} />
      </UserInfoWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  background: ${props => props.theme.color.white};
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;

const UserImageWrap = styled.div`
  margin-right: 10px;
`;

const UserInfoWrap = styled.div``;