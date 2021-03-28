import React, { useState } from 'react';
import styled from 'styled-components';
import { UserImageComponent } from '../../index';
import { WriteTweetComponent, WriteTweetToolComponent, TweetImageComponent } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { State } from "../../../store/reducers/index";
import { postUserTweetApi } from '../../../store/actions/tweet';
import { PostUserTweetUseData } from '../../../api/tweet';

interface TweetDockUseData { 
  replyTweetNumber?: number | null;
  retweetNumber?: number | null;

}

export default ({ replyTweetNumber, retweetNumber }: TweetDockUseData) => {
  const dispatch = useDispatch();
  const { self } = useSelector((state: State) => ({self: state.userReducer.self}));
  const [ tweetContent, writeTweet ] = useState('');
  const [ tweetImage, uploadTweetImage ] = useState('');
  
  const onChangeHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const { value, files, name } = event.currentTarget  as any;

    switch ( name ) {
      case 'tweet': 
        writeTweet( value );
        break;
      
      case 'image':
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = ( finishedEvent ) => {
          const { result } = finishedEvent.target as any;
          uploadTweetImage( result );
        }
        reader.readAsDataURL( theFile );
        break;

      default:
        break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'tweet':
        dispatch(
          postUserTweetApi.request({ 
            tweetContent, 
            replyTweetNumber, 
            retweetNumber, 
            tweetImage 
        }));
        break;

      default:
        break;
    }
  }

  return (
    <Container>
      <SelfImageWrap>
        <UserImageComponent image={self.userImage} />
      </SelfImageWrap>
      <WriteTweetWrap>
        <WriteTweetComponent onChange={onChangeHandler} value={tweetContent} /> 
        {tweetImage && <TweetImageComponent tweetImage={tweetImage} onClick={onClickHandler}/>}
        <WriteTweetToolComponent onClick={onClickHandler} onChange={onChangeHandler}/>
      </WriteTweetWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 10px;

  background: white;
`;

const SelfImageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
`;

const WriteTweetWrap = styled.div`
  width: 100%;
  margin: 0 10px;
  padding-top: 10px;
`;
