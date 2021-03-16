import React from 'react';
import styled from 'styled-components';
import { BoldTextBox, GrayTextBox, TimeTextBox } from '../../index';

interface props {
  userName: string;
  userUniqueName: string;
  tweetCreatedTime: string;
}

export default ({ userName, userUniqueName, tweetCreatedTime }: props) => {
  return (
    <Container>
      <BoldTextBox text={userName} />
      <GrayTextBox text={userUniqueName} />
      <span>·</span>
      <TimeTextBox time={tweetCreatedTime} />
    </Container>
  )
}

const Container = styled.div`
`;