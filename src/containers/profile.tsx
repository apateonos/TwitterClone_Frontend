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
import { NotFoundTweet, NotFoundAccount, Profile, TweetList, UserList } from '../components/index';
import { ModalComponentData } from '../store/reducers/modal';
import { ProfileFollowerData, ProfileFollowingData, ProfileTweetsData, ProfileUserData } from '../store/reducers/profile';
import { UserSelfData } from '../store/reducers/user';
import { FollowsData } from '../store/reducers/follow';
import { Login } from './index';
import { deleteUserTweetApi } from '../store/actions/tweet';
import { DeleteUserTweetUseData } from '../api/tweet';
import { CreateRoomUseData } from '../socket/write';
import { createRoomSocket } from '../store/actions/message';

interface ProfileProps extends RouteComponentProps<any> {
  getUserProfileApi: ({ userUniqueName }: GetUserProfileUseData) => object;
  postFollowUserApi: ({ userNumber }: FollowUseData) => object;
  deleteFollowUserApi: ({ userNumber }: FollowUseData) => object;
  openModal: ({ component }: ModalComponentData) => object;
  deleteUserTweetApi: ({ tweetNumber }: DeleteUserTweetUseData) => object;
  createRoomSocket: ({ users }: CreateRoomUseData) => object;
  self: UserSelfData;
  user: ProfileUserData;
  tweets: Array<ProfileTweetsData>;
  follows: Array<FollowsData>;
  follower: Array<ProfileFollowerData>;
  following: Array<ProfileFollowingData>;
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
  deleteUserTweetApi,
  createRoomSocket,
  self,
  user,
  tweets,
  follows,
  following,
  follower,
  post,
}) => {
  const isUser = Object.keys(user).length > 0 && user.constructor === Object;
  const isLogin = Object.keys(self).length > 0 && self.constructor === Object;
  const isSelf = isLogin && self.user_id === user.user_id;
  const isFollow = follows.filter(follow => follow.follow_user_id === user.user_id).length > 0;
  const { userUniqueName } = useParams<ParamTypes>();

  useEffect(() => {
    getUserProfileApi({ userUniqueName });
  }, [post]);

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>, idx: number,
  ) => {
    event.stopPropagation();
    console.log('click');
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

      case 'follower':
        openModal({ component: <UserList onClick={onClickHandler} users={follower} />})
        break;

      case 'following':
        openModal({ component: <UserList onClick={onClickHandler} users={following} />})
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

      case 'delete':
        console.log('delete');
        deleteUserTweetApi({ tweetNumber: idx });
        break;

      case 'message':
        console.log('message');
        createRoomSocket({ users: [idx] })
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
        isUser={isUser}
        isSelf={isSelf}
        isFollow={isFollow}
        user={user}
        follower={follower}
        following={following}
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
  follows: rootState.followReducer.follows,
  following: rootState.profileReducer.following,
  follower: rootState.profileReducer.follower
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
  },
  deleteUserTweetApi: ({ tweetNumber }: DeleteUserTweetUseData) => {
    return dispatch(deleteUserTweetApi.request({ tweetNumber }));
  },
  createRoomSocket: ({ users }: CreateRoomUseData) => {
    return dispatch(createRoomSocket.request({ users }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(ProfileContainer)
);