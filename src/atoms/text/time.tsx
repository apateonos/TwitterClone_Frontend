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
`;
