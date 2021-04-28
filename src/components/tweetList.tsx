import React from 'react';
import styled from 'styled-components';
import { TweetCard } from './index';
import { TweetCardUseData } from './tweetCard';

interface TweetListUseProps {
  self: any;
  follows: any;
  tweets: Array<TweetCardUseData>;
  retweets: Array<any>;
  hearts: Array<any>;
}

export default ({ self, follows, tweets, retweets, hearts }: TweetListUseProps) => {
  return (
    <div>
      {
        tweets.length > 0 
          ? tweets.map((el, key)=> <TweetCard 
            tweet={el} 
            key={key}
            self = {self}
            follows = {follows}
            retweets = {retweets}
            hearts = {hearts}
          />)
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