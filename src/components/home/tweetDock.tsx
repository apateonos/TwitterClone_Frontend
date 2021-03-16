import React, { useEffect, useState } from 'react';
import { IconButton, TextArea } from '../index';
import styled from 'styled-components';
import { icon } from '../../assets/images/svg';

interface ComponentUseData {
  props: TweetDockUseData;
}

export interface TweetDockUseData {
  onChange: Function;
  onClick: Function;
  tweetContent: string;
  tweetImage: any;
}

export default ({ props }: ComponentUseData) => {
  const { onChange, onClick, tweetContent, tweetImage } = props;

  return (
    <div>
      <div>
        <TextArea onChange={onChange} value={tweetContent} placeholder="What's on your mind..." name='tweet' height={30}/>
        {tweetImage && <IMG src={tweetImage}/>}
      </div>
      <div>
        <IconButton
          image={icon.image}
          accept="image/jpeg, image/jpg, image/png"
          name="image"
          onChange={onChange}
          id="image_file"
        />
        <IconButton
          image={icon.gif}
          accept="image/gif"
          name="gif"
          onChange={onChange}
          id="gif_file"
        />
        <button name='postTweet' onClick={(e)=>onClick(e)}>Tweet</button>
      </div>
    </div>
  )
}

const IMG = styled.img`
  width: 100px;
  height: 100px;
`;