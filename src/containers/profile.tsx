import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { FollowUseData } from '../api/follow';
import { GetUserProfileUseData, GetMoreUserTweetUseData } from '../api/profile';
import { modal } from '../store/actions/modal';
import { getUserProfileApi, getMoreUserTweetApi } from '../store/actions/profile';
import { deleteFollowUserApi, postFollowUserApi } from '../store/actions/follow';
import { Tweet } from './index';
import { Profile, TweetList } from '../components/index';
import { OpenModalUseData } from '../store/actions/modal';
import { ProfileTweetsData } from '../store/reducers/profile';

interface ProfileProps extends RouteComponentProps<any> {
  getUserProfileApi: ({ userUniqueName }: GetUserProfileUseData) => object;
  getMoreUserTweetApi: ({ userUniqueName, pickupCount }: GetMoreUserTweetUseData) => object;
  postFollowUserApi: ({ userNumber }: FollowUseData) => object;
  deleteFollowUserApi: ({ userNumber }: FollowUseData) => object;
  opneModal: ({ component }: OpenModalUseData) => object;
  self: SelfData;
  user: UserData;
  tweets: Array<ProfileTweetsData>;
  post: [];
}

interface SelfData {
  userNumber: number;
  userImage: string;
  userName: string;
  userUniqueName: string;
}

interface UserData {
  userNumber: number;
  profileBackground: string;
  userImage: string;
  userName: string;
  userUniqueName: string;
  profile: string;
  userCreatedTime: string;
  userFollowerNumber: number;
  userFollowingNumber: number;
}

interface ParamTypes {
  userUniqueName: string;
}

const ProfileContainer: React.FC<ProfileProps> = ({
  getUserProfileApi, 
  postFollowUserApi,
  deleteFollowUserApi,
  opneModal,
  self,
  user,
  tweets,
  post,
}) => {
  const isSelf = self.userNumber === user.userNumber;
  const isFollow = true;
  const { userUniqueName } = useParams<ParamTypes>();

  useEffect(() => {
    getUserProfileApi({ userUniqueName });
  }, [post]);

  useEffect(() => {
    getUserProfileApi({ userUniqueName });
  }, []);

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>, idx: number,
  ) => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'follow':
        postFollowUserApi({ 
          userNumber: idx 
        });
        break;
      
      case 'unfollow':
        deleteFollowUserApi({ 
          userNumber: idx 
        });
        break;

      case 'reply':
        opneModal({
          component: <Tweet replyNumber={idx}/>
        });
        break;

      case 'retweet':
        opneModal({
          component: <Tweet retweetNumber={idx}/>
        });
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Profile
        onClick={onClickHandler} 
        user={user}
        isSelf={isSelf}
        isFollow={isFollow}
      />
      <TweetList 
        onClick={onClickHandler}
        tweets={tweets}
      />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self,
  user: rootState.profileReducer.user,
  tweets: rootState.profileReducer.tweets,
  post: rootState.tweetReducer.res
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserProfileApi: ({ userUniqueName }: GetUserProfileUseData) => {
    return dispatch(getUserProfileApi.request({ userUniqueName }));
  },
  getMoreUserTweetApi: ({ userUniqueName, pickupCount }: GetMoreUserTweetUseData) => {
    return dispatch(getMoreUserTweetApi.request({ userUniqueName, pickupCount }));
  },
  postFollowUserApi: ({ userNumber }: FollowUseData) => {
    return dispatch(postFollowUserApi.request({ userNumber }));
  },
  deleteFollowUserApi: ({ userNumber }: FollowUseData) => {
    return dispatch(deleteFollowUserApi.request({ userNumber }));
  },
  opneModal: ({ component }: OpenModalUseData) => {
    return dispatch(modal.open({ component }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(ProfileContainer)
);