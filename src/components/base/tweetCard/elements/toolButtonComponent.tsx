import React from 'react';
import styled from 'styled-components';
import { TweetCardUseData } from '../tweetCard';
import { ToolButton } from '../index';
import { tweetCardToolButtonIcon } from '../../../../assets/images/svg';

interface ToolButtonUseData {
  onClick: Function;
  props: TweetCardUseData;
}

export default ({ onClick, props }: ToolButtonUseData) => {
  const { tweetNumber, retweetCount, replyTweetCount } = props;
  return (
    <ToolButtonComponent>
      <ToolButton tweetNumber={tweetNumber} onClick={onClick} image={tweetCardToolButtonIcon.reply} color='blue' name='reply' count={replyTweetCount} />
      <ToolButton tweetNumber={tweetNumber} onClick={onClick} image={tweetCardToolButtonIcon.retweet} color='green' name='retweet' count={retweetCount} />
      <div></div>
      <div></div>
      <div></div>
  </ToolButtonComponent>
  )
}

const ToolButtonComponent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
