import React from 'react';
import styled from 'styled-components';
import { UserImage, AreaInput, TweetImage, CancelButton, InputIconButton, BlueButton } from './index';
import { tweetIcon } from '../assets/images/svg';
import { baseUrl } from '../config/config';

interface TweetUseProps { 
  onClick: Function;
  onChange: Function;
  self: SelfData;
  tweet: string;
  image: string;
}

export interface SelfData {
  user_image: string;
}

export default ({ onClick, onChange, self, tweet, image }: TweetUseProps) => {
  return (
    <Container >
      <UserImage image={self.user_image} />
      <WriteTweetWrap>
        <AreaInput onChange={onChange} value={tweet} name='tweet' placeholder='Tweets...' />
        {image && 
          <TweetImageWrap>
            <CancelButtonWrap>
              <CancelButton name='cancel' onClick={onClick} /> 
            </CancelButtonWrap>
            <TweetImage image={image} />
          </TweetImageWrap>
        }
        <ToolButtonWrap>
          <InputIconButtonWrap>
            <InputIconButton image={tweetIcon.image} accept="image/jpeg, image/jpg, image/png" name="image" onChange={onChange} id="image_file" />
            <InputIconButton image={tweetIcon.gif} accept="image/gif" name="gif" onChange={onChange} id="gif_file" />
          </InputIconButtonWrap>
          <TweetButtonWrap>
            <BlueButton onClick={onClick} text='TWEET' name='post' />
          </TweetButtonWrap>
        </ToolButtonWrap>
      </WriteTweetWrap>
    </Container>
  )
}

const Container = styled.form`
  display: flex;
  padding: 10px;

  background: white;
`;

const WriteTweetWrap = styled.div`
  width: 100%;
  margin: 0 10px;
  padding-top: 10px;
`;

const TweetImageWrap = styled.div`
  position:relative;
  margin-bottom: 10px;
`;

const CancelButtonWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ToolButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const InputIconButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

const TweetButtonWrap = styled.div`
  width: 150px;
`;
