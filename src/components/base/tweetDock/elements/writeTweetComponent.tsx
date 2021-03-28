import React from 'react';
import styled from 'styled-components';
import { AreaInput } from '../../../index';

interface WriteTweetComponentUseProps {
  onChange: Function;
  value: string;
}

export default ({ onChange, value }: WriteTweetComponentUseProps) => {
  return (
    <Container>
      <AreaInput 
        onChange={onChange} 
        value={value} 
        name='tweet' 
        placeholder='Tweets...'
      />
    </Container>
  )
}

const PLACEHOLDER_LIST = {
  tweet: "What's on your happen...",
  reply: "Reply...",
  retweet: "Retweet..."
}

const Container = styled.div`
  margin-bottom: 10px;
`;