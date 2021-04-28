import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

interface TweetTextUseProps {
  text: string;
  to?: string;
}
export default ({ text, to }: TweetTextUseProps) => {
  const history = useHistory();
  const textClicked = (e: React.MouseEvent) => {
    e.stopPropagation();
    history.push(`/profile/${to}`);
  }
  return (
    <Text onClick={(e) => textClicked(e)}>{text}</Text>
  )
}

const Text = styled.p`
`;