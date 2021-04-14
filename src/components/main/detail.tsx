import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UserImage, UserName, UserUniqueName, TweetText, TweetImage, TweetInfoText, IconButton } from '../index';
import { tweetCardIcon } from '../../assets/images/svg';
import { baseUrl } from '../../config/config';

interface DetailUseProps {
  onClick: Function;
  tweet: TweetUseData;
}

export interface TweetUseData {
  user_id: number;
  user_image: string;
  unique_name: string;
  display_name: string;

  tweet_id: number;
  tweet_text: string;
  tweet_image: string;
  created_at: string;
  reply_count: number;
  retweet_count: number;
  
  retweet_id: number;
  retweet_user_id: string;
  retweet_user_image: string
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
  
    tweet_id,
    tweet_text,
    tweet_image,
    created_at,
    reply_count,
    retweet_count,
    
    retweet_id,
    retweet_user_id,
    retweet_user_image,
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
          {tweet_image && 
            <TweetImageWrap>
              <TweetImage image={baseUrl + tweet_image} />
            </TweetImageWrap>
          }
        </TweetContentWrap>
        {retweet_id &&
          <RetweetWrap onClick={(event) => {event.stopPropagation(); history.push(`/tweet/${retweet_id}`)}}>
            <RetweetUserInfoWrap onClick={(event) => {event.stopPropagation(); history.push(`/profile/${retweet_unique_name}`)}}>
              <RetweetUserImageWrap>
                <UserImage image={retweet_user_image && baseUrl + retweet_user_image} type='small'/>
              </RetweetUserImageWrap>
              <UserName text={retweet_display_name} />
              <UserUniqueName text={retweet_unique_name} />
            </RetweetUserInfoWrap>
            <RetweetContentWrap>
              {retweet_image &&
                <RetweetImageWrap>
                  <TweetImage image={retweet_image && baseUrl + retweet_image}/>
                </RetweetImageWrap>
              }
            <RetweetTextWrap>
              <TweetText tweet={retweet_text}/>
            </RetweetTextWrap>
            </RetweetContentWrap>
          </RetweetWrap>
        }
      </ContentWrap>
      <TweetInfoTextWrap>
        <TweetInfoText text='Reply' count={reply_count} />
        <TweetInfoText text='Retweet' count={retweet_count} />
      </TweetInfoTextWrap>
      <ToolButtonWrap>
        <IconButton idx={tweet_id} onClick={onClick} image={tweetCardIcon.reply} color='blue' name='reply'  />
        <IconButton idx={tweet_id} onClick={onClick} image={tweetCardIcon.retweet} color='green' name='retweet' />
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
  padding: 9px 0;
`;

const UserInfoWrap = styled.div`
  display: flex;
  padding: 6px 0 7px;
`;

const UserInfoTextWrap = styled.div`
  margin: 0 10px;
`;

const TweetImageWrap = styled.div`
  margin: 5px 0;
`;

const RetweetWrap = styled.div`
  border: 1px solid ${props => props.theme.color.borderGray};
  background: ${props => props.theme.color.cardHoverGray};
  border-radius: 10px;
  padding: 5px;
  margin: 5px 0;
`;

const RetweetUserInfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 17px;
`;

const RetweetUserImageWrap = styled.div`
  margin-right: 5px;
`;
const RetweetContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 17px;
`;

const RetweetImageWrap = styled.div`
  max-width: 150px;
  max-height: 150px;
  margin-right: 10px;
`;
const RetweetTextWrap = styled.div``;

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