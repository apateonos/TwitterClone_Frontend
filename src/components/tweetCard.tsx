import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { tweetCardIcon } from '../assets/images/svg';
import { CreateTime, UserImage, UserName, UserUniqueName, TweetText, IconButton, TweetImage, BranchButton } from './index';
import { baseUrl } from '../config/config';

interface TweetCardUseProps {
  onClick: Function;
  tweet: TweetCardUseData;
}

export interface TweetCardUseData {
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

export default ({ 
  onClick,
  tweet
}: TweetCardUseProps) => {
  const history = useHistory();
  const {  
    user_image,
    unique_name,
    display_name,

    id,
    tweet_text,
    tweet_image,
    created_at,
    reply_count,
    retweet_count,
    
    retweet_unique_name,
    retweet_display_name,
    retweet_text,
    retweet_image
  } = tweet;
  
  return (
    <Container onClick={() => history.push(`/tweet/${id}`)}>
      <TweetWrap>
        <UserImageWrap>
          <UserImage image={user_image && baseUrl + user_image} />
        </UserImageWrap>
        <TweetContentWrap>
          <UserInformationWrap>
            <UserName text={display_name} />
            <UserUniqueName text={unique_name} />
            <CreateTime time={created_at} />  
          </UserInformationWrap>
          <TweetContentPaddingWrap>  
            <TweetTextWrap>
              <TweetText tweet={tweet_text} />
            </TweetTextWrap>
            {tweet_image && 
              <TweetImageWrap>
                <TweetImage image={baseUrl + tweet_image}/>
              </TweetImageWrap>  
            }
            <ToolButtonWrap>
              <IconButton idx={id} onClick={onClick} image={tweetCardIcon.reply} color='blue' name='reply' count={reply_count} />
              <IconButton idx={id} onClick={onClick} image={tweetCardIcon.retweet} color='green' name='retweet' count={retweet_count} />
              <div></div>
              <div></div>
              <div></div>
            </ToolButtonWrap>
          </TweetContentPaddingWrap>
        </TweetContentWrap>
        <BranchButtonWrap>
            <BranchButton />
        </BranchButtonWrap>
      </TweetWrap>
    </Container>
  )
}

const Container = styled.article`
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  transition-duration: 0.5s;
  background: white;

  :hover {
    background: ${props => props.theme.color.cardHoverGray};
  }
`;

const UserImageWrap = styled.div`
  
`;

const UserInformationWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    margin-right: 2px;

    : nth-child(2) {
      margin-right: 10px;
    }
  }
`;

const TweetWrap = styled.div`
  display: flex;
`;

const TweetContentWrap = styled.div`
  margin: 5px 0;
  padding: 0 10px;
  width: 100%;
`;

const TweetContentPaddingWrap = styled.div`
  padding: 0 10px;
`;

const TweetTextWrap = styled.div`
  margin: 5px 0;
`;

const TweetImageWrap = styled.div`
  margin: 5px 0;
`;

const ToolButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const BranchButtonWrap = styled.div`
  width: 35px;
`;