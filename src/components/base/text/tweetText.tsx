import React from 'react';
import styled from 'styled-components';

interface TweetTextUseProps {
  tweet: string;
  type?: 'large'|'normal';
}
export default ({ tweet, type }: TweetTextUseProps) => {
  const fontSize = {
    large: '20px',
    normal: '14px'
  }
  return (
    <Tweet fontSize={type ? fontSize[type] : fontSize.normal} >{tweet}</Tweet>
  )
}

interface StyledUseProps {
  fontSize: string;
}
const Tweet = styled.p<StyledUseProps>`
  word-break: break-all;
  font-size: ${props => props.fontSize};
`;
