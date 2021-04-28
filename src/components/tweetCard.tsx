import { tweetCardSVG } from '../assets/images/svg';
import { IconButton } from '../atoms/buttons';
import { TweetImage, UserImage } from '../atoms/imgs';
import { DescText, UserNameText, TimeText, UniqueNameText } from '../atoms/text';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { SelfData } from 'store/reducers/user';
import { FollowsData } from 'store/reducers/follow';
import { HeartData, RetweetData } from 'store/reducers/tweet';

interface TweetCardUseProps {
  tweet: TweetCardUseData;
  self: SelfData;
  follows: Array<FollowsData>;
  retweets: Array<RetweetData>;
  hearts: Array<HeartData>;
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


const initialState = { isFollow: false, isSelf: false, isRetweet: false, isHeart: false };
export default ({ 
  tweet,
  self,
  follows,
  retweets,
  hearts,
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
  const history = useHistory();
  const [ state, inputState ] = useState(initialState);

  useEffect(() => {
    console.log(follows, retweets, hearts);
    const isSelf = self.user_id === user_id;
    const isRetweet = retweets.some(rt => rt.tweet_id === tweet_id);
    const isHeart = hearts.some(h => h.tweet_id === tweet_id);
    const isFollow = follows.some(fu => fu.user_id === user_id);
    inputState({ isSelf, isFollow, isRetweet, isHeart });
  }, [self]);

  useEffect(() => {
    const isFollow = follows.some(fu => fu.user_id === user_id);
    inputState({ ...state, isFollow });
  }, [follows])
  const containerClicked = (e: React.MouseEvent) => {
    e.stopPropagation();
    history.push(`/tweet/${tweet_id}`);
  }
  return (
    <Container onClick={(e) => containerClicked(e)} >
      <UserImage image={user_image} to={unique_name} />
      <UserNameText text={user_name} to={unique_name} />
      <UniqueNameText text={unique_name} to={unique_name} />
      <TimeText text={created_at} />
      <DescText text={tweet_text} />
      <TweetImage image={tweet_image} />
      <IconButton name='reply' icon={tweetCardSVG.reply} color='' idx={tweet_id}/>
      {state.isRetweet 
        ? <IconButton name='unretweet' icon={tweetCardSVG.retweet} color='' idx={tweet_id} />
        : <IconButton name='retweet' icon={tweetCardSVG.retweet} color='' idx={tweet_id} /> }
      {state.isHeart
        ? <IconButton name='unheart' icon={tweetCardSVG.heart} color='' idx={tweet_id} /> 
        : <IconButton name='heart' icon={tweetCardSVG.heart} color='' idx={tweet_id} /> }  
    </Container>
  )
}

const Container = styled.article`
`;
