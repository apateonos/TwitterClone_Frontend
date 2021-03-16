import React, { AllHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { RetweetCard, TweetUserInfoBox } from '../../index';

interface ComponentUseData {
  onClick: Function;
  props: TweetCardUseData;
  idx: number;
}

export interface TweetCardUseData {
  userNumber: number;
  userImage: any;
  userUniqueName: string;
  userName: string;

  tweetNumber: number;
  tweetContent: string;
  tweetImage: any;
  tweetCreatedTime: string;

  replyTweetCount: number;
  retweetCount: number;

  retweetNumber?: number;
  retweetUserName?: string;
  retweetUserUniqueName?: string;
  retweetContent?: string;
}

export default ({props, onClick, idx }: ComponentUseData) => {
  const { 
    userNumber, 
    userImage, 
    userUniqueName, 
    userName, 
    tweetNumber, 
    tweetContent, 
    tweetImage, 
    tweetCreatedTime,
    retweetNumber,
    retweetCount,
    replyTweetCount
  } = props;
  const history = useHistory();
  
  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.target as any;
    console.log(id);
    switch ( id ) {
      case 'button':
        console.log('onClick')
        onClick(e, tweetNumber);
        break;

      case 'name':
        history.push(`/${userUniqueName}`)
        break;

      case 'retweet':
        history.push(`/tweet/${retweetNumber}`)
        break;

      default:
        history.push(`/tweet/${tweetNumber}`)
        break;
    }
  }
  return (
    <Container onClick={(e)=> onClickHandler(e)}>
      <div>리트윗 박스</div>
      <TweetWrap>
        <UserImageWrap id='name'>
          <Image src={userImage}/>
        </UserImageWrap>
        <TweetContentWrap>
          <TweetUserInfoWrap>
            <TweetUserInfoBox
              userName={userName}
              userUniqueName={userUniqueName}
              tweetCreatedTime={tweetCreatedTime}
            />
          </TweetUserInfoWrap>
          <TweetContentBox>
            <div  >{tweetContent}</div>
            <div  >{tweetImage}</div>
            {retweetNumber && <RetweetCard props={props} />}
          </TweetContentBox> 
          <ToolButtonBox>
            <Button id='button' name='reply'>{replyTweetCount}</Button>
            <Button id='button' name='retweet'>{retweetCount}</Button>
          </ToolButtonBox>
        </TweetContentWrap>
      </TweetWrap>
    </Container>
  )
}

const Container = styled.div`
`;

const UserImageWrap = styled.div`
  padding: 10px 5px;
  width: 50px;
`;

const TweetWrap = styled.div`
  position: relative;
  display: flex;
`;

const TweetContentWrap =styled.div`
  width: 100%;
  background: yellow;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: gray;
`;

const TweetUserInfoWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

const TweetContentBox = styled.div`
  padding: 0 10px;
`;

const ToolButtonBox = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

const Button = styled.button`
`;