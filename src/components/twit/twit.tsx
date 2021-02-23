import { TwitToolButton } from '../index';
import React from 'react';
import styled from 'styled-components';

interface props {
  userImage: any;
  userName: any;
  userId: any;
  text: any;
  retwit: any[];
  reply: any[];
  heart: any[];
}

function Twit ({ userImage, userName, userId, text, reply, heart, retwit }:props ) {
  
  
  return (
    <Container>
      <UserImageWrap>{userImage}</UserImageWrap>
      <ContentBox>
        <UserInfoBox>
          <UserName>{userName}sadasd</UserName>
          <UserId>{userId}@asdasd</UserId>
          <Date>2월 14일</Date>
        </UserInfoBox>
        <Content>
          {text}
        </Content>
        <ButtonBox>
          <TwitToolButton nubmer={reply ? reply.length : 0} color={'red'}/>
          <TwitToolButton nubmer={retwit ? retwit.length : 0} color={'green'}/>
          <TwitToolButton nubmer={heart ? heart.length : 0} color={'blue'}/>
        </ButtonBox>
      </ContentBox>
    </Container>
  )
}

export default Twit;

const Container = styled.div`
  display: flex;

  padding: 7px 13px;
  border-bottom: 1px solid #cfcfcf;
  background: white;

  transition-duration: 0.3s;
  :hover {
    background: #efefef;
  }
`;

const UserImageWrap = styled.div`
  min-width: 50px;
  margin-right: 9px;
  background: gray;
`;

const ContentBox = styled.div`
  width: 100%;
  word-break: break-all;
`;

const UserInfoBox = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: 800;
`;

const UserId = styled.div`
  font-size: 15px;
  color: gray;
`;

const Date = styled.div`
  font-size: 15px;
  color: gray;
`;

const Content = styled.div`
  padding: 5px 0;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20px;
`;