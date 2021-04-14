import { TweetCardUseData } from '../molecule/tweetCard';
import React from 'react';
import styled from 'styled-components';
import { Tweet } from '../../containers/index';
import { TweetList, NotFoundTweet } from '../index';

interface HomeComponentUseProps {
  onClick: Function;
  tweets: Array<TweetCardUseData>
}
export default ({ onClick, tweets }: HomeComponentUseProps) => {
  return (
    <Container>
      <Tweet />
      <TweetList 
        onClick={onClick}
        tweets={tweets}
        notFound={<NotFoundTweet/>}
      />
    </Container>
  )
}

const Container = styled.div`

`;