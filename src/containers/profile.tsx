import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { FollowUseData } from '../api/follow';
import { GetUserProfileUseData } from '../api/profile';
import { modal } from '../store/actions/modal';
import { getUserProfileApi } from '../store/actions/profile';
import { deleteFollowUserApi, postFollowUserApi } from '../store/actions/follow';
import { Header, Tweet } from './index';
import { NotFoundTweet, NotFoundAccount, Profile, TweetList } from '../components/index';
import { ModalComponentData } from '../store/reducers/modal';
import { ProfileTweetsData, ProfileUserData } from '../store/reducers/profile';
import { UserSelfData } from '../store/reducers/user';
import { FollowsData } from '../store/reducers/follow';
import { Login } from './index';

interface ProfileProps extends RouteComponentProps<any> {
  getUserProfileApi: ({ userUniqueName }: GetUserProfileUseData) => object;
  postFollowUserApi: ({ userNumber }: FollowUseData) => object;
  deleteFollowUserApi: ({ userNumber }: FollowUseData) => object;
  openModal: ({ component }: ModalComponentData) => object;
  self: UserSelfData;
  user: ProfileUserData;
  tweets: Array<ProfileTweetsData>;
  follows: Array<FollowsData>;
  post: [];
}

interface ParamTypes {
  userUniqueName: string;
}

const ProfileContainer: React.FC<ProfileProps> = ({
  getUserProfileApi, 
  postFollowUserApi,
  deleteFollowUserApi,
  openModal,
  self,
  user,
  tweets,
  follows,
  post,
}) => {
  const isUser = Object.keys(user).length > 0 && user.constructor === Object;
  const isLogin = Object.keys(self).length > 0 && self.constructor === Object;
  const isSelf = self.id === user.id;
  const isFollow = follows.filter(follow => follow.follow_user_id === user.id).length > 0;
  const { userUniqueName } = useParams<ParamTypes>();
  
  useEffect(() => {
    getUserProfileApi({ userUniqueName });
  }, []);

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>, idx: number,
  ) => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'follow':
        if (isLogin) {
          postFollowUserApi({ userNumber: idx });
        }
        else {
          openModal({ component: <Login />});
        }
        break;
      
      case 'unfollow':
        deleteFollowUserApi({ 
          userNumber: idx 
        });
        break;

      case 'reply':
        openModal({
          component: <Tweet replyNumber={idx}/>
        });
        break;

      case 'retweet':
        openModal({
          component: <Tweet retweetNumber={idx}/>
        });
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Header 
        title='Profile'
      />
      <Profile
        onClick={onClickHandler} 
        user={user}
        isUser={isUser}
        isSelf={isSelf}
        isFollow={isFollow}
        userUniqueName={userUniqueName}
      />
      <TweetList 
        onClick={onClickHandler}
        tweets={tweets}
        notFound={isUser
          ? <NotFoundTweet/>
          : <NotFoundAccount/>
        }
      />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self,
  user: rootState.profileReducer.user,
  tweets: rootState.profileReducer.tweets,
  post: rootState.tweetReducer.res,
  follows: rootState.followReducer.follows
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserProfileApi: ({ userUniqueName }: GetUserProfileUseData) => {
    return dispatch(getUserProfileApi.request({ userUniqueName }));
  },
  postFollowUserApi: ({ userNumber }: FollowUseData) => {
    return dispatch(postFollowUserApi.request({ userNumber }));
  },
  deleteFollowUserApi: ({ userNumber }: FollowUseData) => {
    return dispatch(deleteFollowUserApi.request({ userNumber }));
  },
  openModal: ({ component }: ModalComponentData) => {
    return dispatch(modal.open({ component }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(ProfileContainer)
);