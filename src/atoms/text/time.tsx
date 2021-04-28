import React from 'react';
import styled from 'styled-components';

interface TweetTextUseProps {
  text: string;
}
export default ({ text }: TweetTextUseProps) => {
  return (
    <Text>{text}</Text>
  )
}

const Text = styled.p`
  margin: 0 4px 6px 0;
`;
