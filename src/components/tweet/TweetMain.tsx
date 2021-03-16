import React from 'react';
import styled from 'styled-components';

export default ({props}: any) => {
  const { userNumber, userImage, userUniqueName, userName, tweetNumber, tweetContent, tweetImage, tweetCreatedTime, replyTweetNumber, retweetNumber } = props;
  
  return (
    <div>
      <div>
        <div>{userImage}</div>
        <div>
          <div>
            <div>{userName}</div>
            <div>{userUniqueName}</div>
            <div>{tweetCreatedTime}</div>
          </div>
          <div>
            <div>{tweetContent}</div>
            <div>{tweetImage}</div>
          </div>
        </div>
      </div>
      <div>
        <div>{replyTweetNumber}</div>
      </div>
    </div>
  )
}