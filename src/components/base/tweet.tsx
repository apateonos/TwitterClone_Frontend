import { tweetSVG } from '../../assets/images/svg';
import { EmphasisButton } from '../../atoms/buttons';
import { UserImage } from '../../atoms/imgs';
import { AreaInput, IconInput } from '../../atoms/inputs/index';
import React from 'react';
import styled from 'styled-components';

interface TweetComponentUseProps {
  onSubmit: Function;
  onClick: Function;
  onChange: Function;
  state: any;
  self: any;
}

export default ({ onSubmit, onChange, onClick, state, self }: TweetComponentUseProps) => {
  const { tweet_text, preview_image } = state;
  const { user_image } = self;

  return (
    <Container onSubmit={(e) => onSubmit(e)}>
      <UserImage image={user_image}/>
      <AreaInput onChange={onChange} name='tweet_text' value={tweet_text} placeholder="What's on mind...?"/>
      <div>
        <IconInput onChange={onChange} name='image' icon={tweetSVG.image} accept='jpg' />
        <IconInput onChange={onChange} name='image' icon={tweetSVG.gif} accept='gif' />
        <EmphasisButton onClick={()=> false} type='submit' name='post' text='Tweet'/>
      </div>
    </Container> 
  )
}

const Container = styled.form``;