import { tweetCardSVG } from '../assets/images/svg';
import { CountTextButton, IconButton } from '../atoms/buttons/index';
import { TweetImage, UserImage } from '../atoms/imgs/index';
import { DescText, UserNameText, TimeText, UniqueNameText } from '../atoms/text/index';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeartListData, RetweetListData } from 'store/reducers/detail';

interface DetailUseProps {
  tweet: DetailUseData;
  retweetList: Array<HeartListData>;
  heartList: Array<RetweetListData>;
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

const initialState = { isHeart: false, isRetweet: false };
export default ({ tweet, retweetList, heartList, retweets, hearts }: DetailUseProps) => {
  const {  
    user_id,
    user_image,
    unique_name,
    user_name,

    tweet_id,
    tweet_text,
    tweet_image,
    created_at,
    retweet_count,
    heart_count
  } = tweet;
  const [ state, inputState ] = useState(initialState);

  useEffect(()=> {
    const isRetweet = retweets !== undefined && retweets.some(rt => rt.tweet_id === tweet_id);
    const isHeart = hearts !== undefined && hearts.some(h => h.tweet_id === tweet_id);
    console.log(retweets, hearts);
    inputState({ isRetweet, isHeart });
  }, [retweets, hearts]);
  console.log(state);
  return (
    <div>
      <UserImage image={user_image} />
      <UserNameText text={user_name} />
      <UniqueNameText text={unique_name} />
      <TimeText text={created_at} />
      <DescText text={tweet_text} />
      <TweetImage image={tweet_image} />      
      <div>
        <CountTextButton name='userlist' idx={retweetList} count={retweetList.length} text='Retweets' />
        <CountTextButton name='userlist' idx={heartList} count={heartList.length} text='Hearts' />
      </div>
      <div>
        <IconButton name='reply' icon={tweetCardSVG.reply} color='' idx={tweet_id} />
        {state.isRetweet 
          ? <IconButton name='unretweet' icon={tweetCardSVG.retweet} color='' idx={tweet_id} />
          : <IconButton name='retweet' icon={tweetCardSVG.retweet} color='' idx={tweet_id} /> }
        {state.isHeart
          ? <IconButton name='unheart' icon={tweetCardSVG.heart} color='' idx={tweet_id} /> 
          : <IconButton name='heart' icon={tweetCardSVG.heart} color='' idx={tweet_id} /> }  
            
      </div>
    </div>
  )
}