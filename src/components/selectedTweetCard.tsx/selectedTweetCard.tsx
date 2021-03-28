import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers/index';
import styled from 'styled-components';
import { UserInfoComponent, TweetContentComponent, RetweetComponent, OtherInformationComponenet, ToolButtonComponent } from './index';
import {  } from 'components/profileCard';

export interface SelectedTweetUseData {
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
  retweetNumber: number;
  retweetUserName: string;
  retweetUserUniqueName: string;
  retweetContent: string;
}

export default () => {
  const props: SelectedTweetUseData = useSelector((state: State) => state.tweetDetailReducer.selectedTweet);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    
  }

  return (
    <Container>
      <ContentWrap>
        <UserInfoComponent props={props} />
        <TweetContentComponent props={props} />
        {props.retweetNumber && <RetweetComponent props={props} />}
        <OtherInformationComponenet props={props}/>
      </ContentWrap>
      <ToolButtonComponent onClick={onClickHandler} props={props} />
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  margin: 10px 0;
  background: white;
`;

const ContentWrap = styled.div`
  padding: 0 15px;
`;