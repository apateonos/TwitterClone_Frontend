import React from 'react';
import styled from 'styled-components';

interface TweetContentComponentUseData {
  tweetContent: string;
}

export default ({ tweetContent }: TweetContentComponentUseData) => {
  return (
    <Container>{tweetContent}</Container>
  )
}

const Container = styled.div`
  word-break: break-all;
  margin: 5px 0;
`;