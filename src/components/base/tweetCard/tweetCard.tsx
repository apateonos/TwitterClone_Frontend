import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import Modal from '../modal';
import { UserInfoComponent, TweetContentComponent, RetweetComponent, ToolButtonComponent, UserImageComponent } from './index';
//import { Auth } from '../../../containers/index';
import { TweetDock, LoginAccountDock } from '../../index';
import { reTweetIcon } from '../../../assets/images/svg';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../store/reducers/index';


interface TweetCardUseProps {
  props: TweetCardUseData;
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
  retweetUserImage: string;
  retweetNumber: number;
  retweetUserName: string;
  retweetUserUniqueName: string;
  retweetContent: string;
}

export default ({ props }: TweetCardUseProps) => {
  const dispatch = useDispatch();
  const { userName, userUniqueName, tweetContent, tweetNumber, retweetNumber } = props;
  const { self, isLogin } = useSelector((state: State) => ({self: state.userReducer.self, isLogin: state.userReducer.isLogin}));
  const [ isModal, setModal ] = useState(false);
  const [ isReply, setReply ] = useState(false);
  const [ isRetweet, setRetweet ] = useState(false);
  const history = useHistory();

  const onClickHandler = (event: React.MouseEvent) => {
    const { name } = event.currentTarget as any;

    switch (name) {      
      case 'reply':
        dispatch({type: "OPEN_MODAL", payload: <TweetDock replyTweetNumber={tweetNumber}/>});
        break;
      
      case 'retweet':
        dispatch({type: "OPEN_MODAL", payload: <TweetDock replyTweetNumber={retweetNumber}/>})
        break;

      default:
        break;
    }
  }

  return (
    <Container onClick={() => history.push(`/tweet/${tweetNumber}`)}>
      {false && <div>{reTweetIcon} {self.userName} is Retweet</div>}
      <TweetWrap>
        <UserImageWrap>
          <UserImageComponent props={props}/>
        </UserImageWrap>
        <TweetComponent>
          <UserInfoComponent userName={userName} userUniqueName={userUniqueName} />
          <TweetContentComponent tweetContent={tweetContent} />
          {retweetNumber && <RetweetComponent props={props} />}
          <ToolButtonComponent onClick={onClickHandler} props={props}/>
        </TweetComponent>
      </TweetWrap>
    </Container>
  )
}

const Container = styled.article`
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  transition-duration: 0.5s;
  background: white;
`;

const UserImageWrap = styled.div`
  padding: 10px 5px 0 15px;
  width: 60px;
`;

const TweetWrap = styled.div`
  display: flex;
`;

const TweetComponent =styled.div`
  margin: 5px 0;
  padding: 0 10px;
  width: 100%;
`;