import { tweetCardSVG } from '../assets/images/svg';
import { CountTextButton, IconButton } from '../atoms/buttons/index';
import { TweetImage, UserImage } from '../atoms/imgs/index';
import { DescText, UserNameText, TimeText, UniqueNameText } from '../atoms/text/index';
import React from 'react';
import styled from 'styled-components';

interface DetailUseProps {
  onClick: Function;
  tweet: DetailUseData;
  retweets: Array<RetweetsData>;
  hearts: Array<HeartsData>;
}

interface DetailUseData {
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

interface RetweetsData {
  tweet_id: number;
}

interface HeartsData {
  tweet_id: number;
}

export default ({ onClick, tweet, retweets, hearts }: DetailUseProps) => {
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
    <div>
      <UserImage image={user_image} />
      <UserNameText text={user_name} />
      <UniqueNameText text={unique_name} />
      <TimeText text={created_at} />
      <DescText text={tweet_text} />
      <TweetImage image={tweet_image} />      
      <div>
        <CountTextButton onClick={onClick} name='retweetCount' count={retweet_count} text='Retweets' />
        <CountTextButton onClick={onClick} name='heartCount' count={heart_count} text='Hearts' />
      </div>
      <div>
        <IconButton onClick={onClick} name='reply' icon={tweetCardSVG.reply} color='' />
        <IconButton onClick={onClick} name='retweet' icon={tweetCardSVG.retweet} color='' />
        <IconButton onClick={onClick} name='heart' icon={tweetCardSVG.heart} color='' />    
      </div>
    </div>
  )
}