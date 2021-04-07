import React from 'react';
import styled from 'styled-components';
import { TweetCard } from './index';
import { TweetCardUseData } from './tweetCard';

interface TweetListUseProps {
  onClick: Function;
  tweets: Array<TweetCardUseData>;
  notFound: JSX.Element;
}

export default ({ onClick, tweets, notFound }: TweetListUseProps) => {
  return (
    <Container>
      {
        tweets.length > 0 
          ? tweets.map((el, idx)=> <TweetCard onClick={onClick} tweet={el} key={idx} />)
          : notFound
      }
    </Container>
  )
}

const Container = styled.section`
  margin-bottom: 70px;
  article: first-child {
    border-top: 1px solid ${props => props.theme.color.borderGray};
  }
`;