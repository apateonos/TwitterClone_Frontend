import { tweetCardSVG } from '../assets/images/svg';
import { IconButton } from '../atoms/buttons';
import { TweetImage, UserImage } from '../atoms/imgs';
import { DescText, UserNameText, TimeText, UniqueNameText } from '../atoms/text';
import React from 'react';
import styled from 'styled-components';

interface TweetCardUseProps {
  onClick: Function;
  tweet: TweetCardUseData;
}

export interface TweetCardUseData {
  user_id: number;
  user_image: string;
  unique_name: string;
  user_name: string;

  tweet_id: number;
  tweet_text: string;
  tweet_image: string;
  created_at: string;
  reply_count: number;
  retweet_count: number;
  heart_count: number;
}

export default ({ 
  onClick,
  tweet,
}: TweetCardUseProps) => {
  const {  
    user_id,
    user_image,
    unique_name,
    user_name,

    tweet_id,
    tweet_text,
    tweet_image,
    created_at,
    reply_count,
    retweet_count,
    heart_count
  } = tweet;

  return (
    <Container onClick={(e) => onClick(e, tweet_id)}>
      <UserImage image={user_image} to={unique_name} />
      <UserNameText text={user_name} to={unique_name} />
      <UniqueNameText text={unique_name} to={unique_name} />
      <TimeText text={created_at} />
      <DescText text={tweet_text} />
      <TweetImage image={tweet_image} />
      <IconButton onClick={onClick} name='reply' icon={tweetCardSVG.reply} color='' count={reply_count}/>
      <IconButton onClick={onClick} name='retweet' icon={tweetCardSVG.retweet} color='' count={retweet_count}/>
      <IconButton onClick={onClick} name='heart' icon={tweetCardSVG.heart} color='' count={heart_count}/>
    </Container>
  )
}

const Container = styled.article`
`;
