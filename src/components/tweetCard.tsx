import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { tweetCardIcon } from '../assets/images/svg';
import { CreateTime, UserImage, UserName, UserUniqueName, TweetText, IconButton } from './index';
import { baseUrl } from '../config/config';

interface TweetCardUseProps {
  onClick: Function;
  tweet: TweetCardUseData;
}

export interface TweetCardUseData {
  userNumber: number;
  userImage: string;
  userUniqueName: string;
  userName: string;
  tweetNumber: number;
  tweetContent: string;
  tweetImage: string;
  tweetCreatedTime: string;
  replyTweetCount: number;
  retweetCount: number;
  retweetUserImage: string;
  retweetNumber: number;
  retweetUserName: string;
  retweetUserUniqueName: string;
  retweetContent: string;
}

export default ({ 
  onClick,
  tweet
}: TweetCardUseProps) => {
  const history = useHistory();
  const {  
    userNumber,
    userImage,
    userUniqueName,
    userName,
    tweetNumber,
    tweetContent,
    tweetImage,
    tweetCreatedTime,
    replyTweetCount,
    retweetCount,
    retweetUserImage,
    retweetNumber,
    retweetUserName,
    retweetUserUniqueName,
    retweetContent,
  } = tweet;
  
  return (
    <Container onClick={() => history.push(`/tweet/${tweetNumber}`)}>
      <TweetWrap>
        <UserImageWrap>
          <UserImage image={userImage} />
        </UserImageWrap>
        <TweetComponent>
          <UserInformationWrap>
            <UserName text={userName} />
            <UserUniqueName text={userUniqueName} />
            <CreateTime time={tweetCreatedTime} />  
          </UserInformationWrap>
          <TweetText tweet={tweetContent} />
          <ToolButtonWrap>
            <IconButton tweetNumber={tweetNumber} onClick={onClick} image={tweetCardIcon.reply} color='blue' name='reply' count={replyTweetCount} />
            <IconButton tweetNumber={tweetNumber} onClick={onClick} image={tweetCardIcon.retweet} color='green' name='retweet' count={retweetCount} />
            <div></div>
            <div></div>
            <div></div>
          </ToolButtonWrap>
        </TweetComponent>
      </TweetWrap>
    </Container>
  )
}

const Container = styled.article`
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  transition-duration: 0.5s;
  background: white;
`;

const UserImageWrap = styled.div`

`;

const UserInformationWrap = styled.div`

`;

const TweetWrap = styled.div`
  display: flex;
`;

const TweetComponent =styled.div`
  margin: 5px 0;
  padding: 0 10px;
  width: 100%;
`;

const ToolButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;