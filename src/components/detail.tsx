import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UserImage, UserName, UserUniqueName, TweetText, TweetImage, TweetInfoText, IconButton } from './index';
import { tweetCardIcon } from '../assets/images/svg';

interface DetailUseProps {
  onClick: Function;
  tweet: TweetUseData;
}

export interface TweetUseData {
  user_id: number;
  user_image: string;
  unique_name: string;
  display_name: string;

  id: number;
  tweet_text: string;
  tweet_image: string;
  created_at: string;
  reply_count: number;
  retweet_count: number;
  
  retweet_id: number;
  retweet_user_id: string;
  retweet_unique_name: string;
  retweet_display_name: string;
  retweet_text: string;
  retweet_image: string;
}

export default ({ onClick, tweet }: DetailUseProps) => {
  const history = useHistory();
  const { 
    user_id,
    user_image,
    unique_name,
    display_name,
  
    id,
    tweet_text,
    tweet_image,
    created_at,
    reply_count,
    retweet_count,
    
    retweet_id,
    retweet_user_id,
    retweet_unique_name,
    retweet_display_name,
    retweet_text,
    retweet_image
  } = tweet;

  return (
    <Container>
      <ContentWrap>
        <UserInfoWrap onClick={() => history.push(`/tweet/${unique_name}`)}>
          <UserImage image={user_image}/>
          <UserInfoTextWrap>
            <UserName text={display_name} />
            <UserUniqueName text={unique_name} />
          </UserInfoTextWrap>
        </UserInfoWrap>
        <TweetContentWrap>
          <TweetText tweet={tweet_text} type='large' />
          {tweet_image && <TweetImage image={tweet_image} />}
        </TweetContentWrap>
      </ContentWrap>
      <TweetInfoTextWrap>
        <TweetInfoText text='Reply' count={reply_count} />
        <TweetInfoText text='Retweet' count={retweet_count} />
      </TweetInfoTextWrap>
      <ToolButtonWrap>
        <IconButton idx={id} onClick={onClick} image={tweetCardIcon.reply} color='blue' name='reply'  />
        <IconButton idx={id} onClick={onClick} image={tweetCardIcon.retweet} color='green' name='retweet' />
        <div></div>
        <div></div>    
      </ToolButtonWrap>
    </Container>
  )
}

const Container = styled.section`
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  margin-bottom: 10px;
  background: white;
`;

const ContentWrap = styled.div`
  margin: 0 17px;
`;

const UserInfoWrap = styled.div`
  display: flex;
  padding: 6px 0 7px;
`;

const UserInfoTextWrap = styled.div`
  margin: 0 10px;
`;

const TweetContentWrap = styled.div`
  padding: 7px 0 8px;
`;

const ToolButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4px 20px;
  border-top: 1px solid ${props => props.theme.color.borderGray};
`;

const TweetInfoTextWrap = styled.div`
  display: flex;
  padding: 8px 20px 7px;
  border-top: 1px solid ${props => props.theme.color.borderGray};

  div{
    margin-right: 25px;
  }
`;