import React from 'react';
import styled from 'styled-components';
import { TweetCardUseData } from './tweetCard';

interface props { props: TweetCardUseData }

export default ({props}:props) => {
  const { 
    retweetCount,
    retweetNumber,
    retweetUserName,
    retweetUserUniqueName,
    retweetContent, 
  } = props;

  return (
    <Container>
      <Cover id='retweet'></Cover>
      <div>{retweetUserName}</div>
      <div>{retweetUserUniqueName}</div>
      <div>{retweetContent}</div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`;

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: blue;
`;