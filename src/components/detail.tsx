import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UserImage, UserName, UserUniqueName, TweetText, TweetImage } from './index';

interface DetailUseProps {
  onClick: Function;
  tweet: TweetUseData;
}

export interface TweetUseData {
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
  retweetNumber: number;
  retweetUserName: string;
  retweetUserUniqueName: string;
  retweetContent: string;
}

export default ({ onClick, tweet }: DetailUseProps) => {
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
    retweetNumber,
    retweetUserName,
    retweetUserUniqueName,
    retweetContent,
  } = tweet;

  return (
    <Container>
      <ContentWrap>
        <UserInfoWrap onClick={() => history.push(`/tweet/${userUniqueName}`)}>
          <UserImage image={userImage}/>
          <UserInfoTextWrap>
            <UserName text={userName} />
            <UserUniqueName text={userUniqueName} />
          </UserInfoTextWrap>
        </UserInfoWrap>
        <TweetText tweet={tweetContent} />
        {tweetImage && <TweetImage image={tweetImage} />}
      </ContentWrap>
      <ToolButtonWrap>
        
      </ToolButtonWrap>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  margin: 10px 0;
  background: white;
`;

const ContentWrap = styled.div`
  padding: 0 15px;
`;

const UserInfoWrap = styled.div`
  display: flex;
`;

const UserInfoTextWrap = styled.div`
  padding: 0 10px;
`;

const ToolButtonWrap = styled.div`
  border-top: 1px solid ${props => props.theme.color.borderGray};
  height: 30px;
`;