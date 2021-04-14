import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { tweetCardIcon } from '../../assets/images/svg';
import { CreateTime, UserImage, UserName, UserUniqueName, TweetText, IconButton, TweetImage, BranchButton } from '../index';
import { baseUrl } from '../../config/config';
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers/index';

interface TweetCardUseProps {
  onClick: Function;
  tweet: TweetCardUseData;
}

export interface TweetCardUseData {
  user_id: number;
  user_image: string;
  unique_name: string;
  display_name: string;

  tweet_id: number;
  tweet_text: string;
  tweet_image: string;
  created_at: string;
  reply_count: number;
  retweet_count: number;
  
  retweet_id: number;
  retweet_user_id: string;
  retweet_user_image: string;
  retweet_unique_name: string;
  retweet_display_name: string;
  retweet_text: string;
  retweet_image: string;
}

export default ({ 
  onClick,
  tweet,
}: TweetCardUseProps) => {
  const history = useHistory();
  const {  
    user_id,
    user_image,
    unique_name,
    display_name,

    tweet_id,
    tweet_text,
    tweet_image,
    created_at,
    reply_count,
    retweet_count,
    
    retweet_id,
    retweet_user_image,
    retweet_unique_name,
    retweet_display_name,
    retweet_text,
    retweet_image
  } = tweet;
  const { self, follows } = useSelector((state: State) => ({
    self: state.userReducer.self,
    follows: state.followReducer.follows
  }))
  const isFollow = follows.length > 0 && follows.some(((el: any) => {el.user_id === user_id}));
  const isSelf = self.user_id !== undefined && self.user_id === user_id;

  const selfBranch = [
    {text: 'Delete Tweet', name: 'delete', idx: tweet_id},
    {text: 'Main Tweet', name: 'main', idx: tweet_id},
  ]
  const followUserBranch = [
    {text: `unfollow @${unique_name}`, name: 'unfollow', idx: user_id},
    {text: 'Send Message', name: 'message', idx: user_id}
  ]

  const unFollowUserBranch = [
    {text: `follow @${unique_name}`, name: 'follow', idx: user_id},
    {text: 'Send Message', name: 'message', idx: user_id}
  ]

  return (
    <Container onClick={() => history.push(`/tweet/${tweet_id}`)}>
      <TweetWrap>
        <UserImageWrap>
          <UserImage image={user_image && baseUrl + user_image} />
        </UserImageWrap>
        <TweetContentWrap>
          <UserInformationWrap onClick={(event) => {event.stopPropagation(); history.push(`/profile/${retweet_unique_name}`)}}>
            <UserName text={display_name} />
            <UserUniqueName text={unique_name} />
            <CreateTime time={created_at} />  
          </UserInformationWrap>
          <TweetContentPaddingWrap>  
            <TweetTextWrap>
              <TweetText tweet={tweet_text} />
            </TweetTextWrap>
            {tweet_image && 
              <TweetImageWrap>
                <TweetImage image={baseUrl + tweet_image}/>
              </TweetImageWrap>  
            }
            {retweet_id &&
              <RetweetWrap onClick={(event) => {event.stopPropagation(); history.push(`/tweet/${retweet_id}`)}}>
                <RetweetUserInfoWrap onClick={(event) => {event.stopPropagation(); history.push(`/profile/${retweet_unique_name}`)}}>
                  <RetweetUserImageWrap>
                    <UserImage image={retweet_user_image && baseUrl + retweet_user_image} type='small'/>
                  </RetweetUserImageWrap>
                  <UserName text={retweet_display_name} />
                  <UserUniqueName text={retweet_unique_name} />
                </RetweetUserInfoWrap>
                <RetweetContentWrap>
                  {retweet_image &&
                    <RetweetImageWrap>
                      <TweetImage image={retweet_image && baseUrl + retweet_image}/>
                    </RetweetImageWrap>
                  }
                  <RetweetTextWrap>
                    <TweetText tweet={retweet_text}/>
                  </RetweetTextWrap>
                </RetweetContentWrap>
              </RetweetWrap>
            }
            <ToolButtonWrap>
              <IconButton idx={tweet_id} onClick={onClick} image={tweetCardIcon.reply} color='blue' name='reply' count={reply_count} />
              <IconButton idx={tweet_id} onClick={onClick} image={tweetCardIcon.retweet} color='green' name='retweet' count={retweet_count} />
              <div></div>
              <div></div>
              <div></div>
            </ToolButtonWrap>
          </TweetContentPaddingWrap>
        </TweetContentWrap>
        <BranchButtonWrap>
            <BranchButton onClick={onClick} list={isSelf ? selfBranch : isFollow ? followUserBranch : unFollowUserBranch}/>
        </BranchButtonWrap>
      </TweetWrap>
    </Container>
  )
}

const Container = styled.article`
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  transition-duration: 0.5s;
  background: white;

  :hover {
    background: ${props => props.theme.color.cardHoverGray};
  }
`;

const UserImageWrap = styled.div`
  
`;

const UserInformationWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    margin-right: 2px;

    : nth-child(2) {
      margin-right: 10px;
    }
  }
`;

const TweetWrap = styled.div`
  display: flex;
`;

const RetweetWrap = styled.div`
  border: 1px solid ${props => props.theme.color.borderGray};
  background: ${props => props.theme.color.cardHoverGray};
  border-radius: 10px;
  padding: 5px;
`;

const RetweetUserInfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 17px;
`;

const RetweetUserImageWrap = styled.div`
  margin-right: 5px;
`;
const RetweetContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 17px;
`;

const RetweetImageWrap = styled.div`
  max-width: 150px;
  max-height: 150px;
  margin-right: 10px;
`;
const RetweetTextWrap = styled.div``;

const TweetContentWrap = styled.div`
  margin: 5px 0;
  padding: 0 10px;
  width: 100%;
`;

const TweetContentPaddingWrap = styled.div`
  padding: 0 10px;
`;

const TweetTextWrap = styled.div`
  margin: 5px 0;
`;

const TweetImageWrap = styled.div`
  margin: 5px 0;
`;

const ToolButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const BranchButtonWrap = styled.div`
  width: 35px;
`;