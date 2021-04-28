import { tweetSVG } from '../../assets/images/svg';
import { EmphasisButton } from '../../atoms/buttons';
import { UserImage } from '../../atoms/imgs';
import { AreaInput, IconInput } from '../../atoms/inputs/index';
import { PreviewImage } from '../index';
import React from 'react';
import styled from 'styled-components';

interface TweetComponentUseProps {
  onSubmit: Function;
  onClick: Function;
  onChange: Function;
  setState: Function;
  state: any;
  self: any;
}

export default ({ onSubmit, onChange, onClick, setState, state, self }: TweetComponentUseProps) => {
  const { tweet_text, preview_image } = state;
  const { user_image } = self;

  return (
    <Container name='tweet' onSubmit={(e) => onSubmit(e)}>
      <UserImage image={user_image}/>
      <TweetWrap>
        <InputWrap>
          <AreaInput onChange={onChange} name='tweet_text' value={tweet_text} placeholder="What's on mind...?"/>
          {preview_image && <PreviewImage onChange={setState} state={state}/>}
        </InputWrap>
        <ButtonWrap>
          <IconInputWrap>
            <IconInput onChange={onChange} name='image' icon={tweetSVG.image} accept='jpg' />
            <IconInput onChange={onChange} name='image' icon={tweetSVG.gif} accept='gif' />
          </IconInputWrap>
          <EmphasisButtonWrap>
            <EmphasisButton type='submit' name='tweet' text='Tweet'/>
          </EmphasisButtonWrap>
        </ButtonWrap>
      </TweetWrap>
    </Container> 
  )
}

const Container = styled.form`
  display: flex;
  background: white;
  padding: 0 7px;
`;

const TweetWrap = styled.div`
  width: 100%;
`;

const InputWrap = styled.div`
  padding: 7px 12px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4px 4%;
`;

const IconInputWrap = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-around;
  align-items: center;
`;

const EmphasisButtonWrap = styled.div`
`;