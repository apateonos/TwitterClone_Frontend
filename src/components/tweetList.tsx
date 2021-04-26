import React from 'react';
import styled from 'styled-components';
import { TweetCard } from './index';
import { TweetCardUseData } from './tweetCard';

interface TweetListUseProps {
  onClick: Function;
  tweets: Array<TweetCardUseData>;
  retweets: Array<any>;
  hearts: Array<any>;
}

export default ({ onClick, tweets, retweets, hearts }: TweetListUseProps) => {
  return (
    <div>
      {
        tweets.length > 0 
          ? tweets.map((el, key)=> <TweetCard onClick={onClick} tweet={el} key={key} />)
          : '로딩중'
      }
    </div>
  )
}

const Container = styled.section`
  margin-bottom: 70px;
  article: first-child {
    border-top: 1px solid ${props => props.theme.color.borderGray};
  }
`;