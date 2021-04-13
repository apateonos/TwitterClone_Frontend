import React from 'react';
import styled from 'styled-components';
import { NotFoundRoom, Search } from './index';

interface MessageComponentuseProps {
  onSubmit: Function;
  onClick: Function;
  onChange: Function;
  keyword: string;
  roomList: Array<any>
}

export default ({ onSubmit, onClick, onChange, keyword, roomList }: MessageComponentuseProps) => {
  return (
    <>
      <SearchWrap>
        <Search
            onSubmit={onSubmit} 
            onClick={onClick} 
            onChange={onChange} 
            keyword={keyword} 
            placeholder='Search user or group...'
          />
      </SearchWrap>
      <RoomList>
        {roomList.length > 0 
          ? roomList.map((el) => <div>{el}</div>) 
          : <NotFoundRoom onClick={onClick} 
        />}
      </RoomList>
    </>
  )
}

const SearchWrap = styled.div`
  padding: 7px 25px;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  background: white;
`;

const RoomList = styled.div``;