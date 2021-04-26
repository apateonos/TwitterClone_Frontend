import React from 'react';
import styled from 'styled-components';
import { RoomCard } from './index';
import { RoomCardUseData } from './roomCard';

interface MessageComponentuseProps {
  onClick: Function;
  roomList: Array<RoomCardUseData>;
}

export default ({ onClick, roomList }: MessageComponentuseProps) => {
  return (
      <RoomList>
        {roomList.length > 0 
          ? roomList.map((el, key) => <RoomCard onClick={onClick} key={key} data={el}/>) 
          : ''
        }
      </RoomList>
  )
}

const RoomList = styled.div``;