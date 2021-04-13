import { BlueButton } from './index';
import React from 'react';
import styled from 'styled-components';

interface NotFoundRoomUseProps {
  onClick: Function;
}
export default ({ onClick }: NotFoundRoomUseProps) => {
  return (
    <Container>
      <TitleWrap>
        <MainTitleWrap>
          <MainTitle>Send a message, get a message</MainTitle>
        </MainTitleWrap>
        <SubTitle>Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!</SubTitle>
        <ButtonWrap>
          <BlueButton onClick={onClick} text="Start Conversation" name='search'/>
        </ButtonWrap>
      </TitleWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  margin-top: 100px;
`;

const TitleWrap = styled.div`
  text-align: center;
`;

const MainTitleWrap = styled.div`
  margin: 15px 0;
`;

const SubTitle = styled.div`
  color: gray;
  padding: 0 60px;
`;

const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const ButtonWrap = styled.div`
  margin: 30px auto;
  width: 200px;
`;