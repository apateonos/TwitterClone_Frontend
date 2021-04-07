import React from 'react';
import styled from 'styled-components';

interface TweetInfoTextUseProps {
  text: string;
  count: number;  
}

export default ({ text, count }: TweetInfoTextUseProps) => {
  return (
    <Container>
      <CountNumber>{count}</CountNumber>
      <Text>{text}</Text>
    </Container>
  )
}

const Container = styled.div``;

const CountNumber = styled.span`
  font-size: 16px;
  font-weight: 700;
  
  margin-right: 2px;
`;

const Text = styled.span`
  font-size: 16px;
  color: ${props=> props.theme.color.grayText};
`;