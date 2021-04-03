import React from 'react';
import styled from 'styled-components';
import { TweetCard } from './index';
import { TweetCardUseData } from './tweetCard';

interface TweetListUseProps {
  onClick: Function;
  tweets: Array<TweetCardUseData>;
}

export default ({ onClick, tweets }: TweetListUseProps) => {
  return (
    <Container>
      {
        tweets.length > 0 
          ? tweets.map((el, idx)=> <TweetCard onClick={onClick} tweet={el} key={idx} />)
          : ''
      }
    </Container>
  )
}

const Container = styled.div`
`;