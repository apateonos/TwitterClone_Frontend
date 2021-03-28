import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TweetCardUseData } from '../tweetCard';
import { BoldTextComponent, GrayTextComponent, TimeTextComponent } from '../../../index';

interface UserInfoComponentUseData {
  userName: string;
  userUniqueName: string;
}

export default ({ userName, userUniqueName }: UserInfoComponentUseData) => {
  const history = useHistory();
  
  return (
    <Container onClick={(event) => {event.stopPropagation(); history.push(`/${userUniqueName}`);}}>
      <BoldTextComponent text={userName} />
      <GrayTextComponent text={userUniqueName} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;