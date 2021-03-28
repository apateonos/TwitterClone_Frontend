import React from 'react';
import styled from 'styled-components';
import { SelectedTweetUseData } from '../selectedTweetCard';

interface TweetContentComponentUseProps {
  props: SelectedTweetUseData;
}
export default ({ props }: TweetContentComponentUseProps) => {
  const { tweetContent, tweetImage } = props;
  return (
    <Container>
      <TweetContent>{tweetContent}</TweetContent>
    </Container>
  )
}

const Container = styled.div`
  
`;

const TweetContent = styled.div`
  font-size: 24px;
  padding: 0 15px;
  margin: 10px 0;
`;