import { UserImage } from '../atoms/imgs';
import { UserNameText, UniqueNameText } from '../atoms/text';
import React from 'react';
import styled from 'styled-components';

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

  return (
    <Container onClick={(e) => onClick(e, room_id)}>
      <UserImage image={user_image} />
      <UserNameText text={display_name} />
      <UniqueNameText text={unique_name} />
    </Container>
  )
}

const Container = styled.div``;