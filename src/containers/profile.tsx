import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { getUserInfoApi } from '../store/actions/user';
import { GetUserInfoUseData } from '../api/user';
import { getUserTweetListApi } from '../store/actions/tweet';
import { GetUserTweetListUseData } from '../api/tweet';
import { Main, Profile } from '../pages/index';
import { TweetCardUseData } from '../components/base/tweet/tweetCard';
import { FollowUserUseData } from '../api/follow';
import { getFollowUserListApi, deleteFollowUserApi, postFollowUserApi } from '../store/actions/follow';

interface ProfileProps extends RouteComponentProps<any> {
  getUserInfoApi: ({ userUniqueName }: GetUserInfoUseData) => object;
  getUserTweetListApi: ({ userUniqueName }: GetUserTweetListUseData) => object;
  getUserFollowListApi: ({ userNumber }: FollowUserUseData) => object;
  postFollowUserApi: ({ userNumber }: FollowUserUseData) => object;
  deleteFollowUserApi: ({ userNumber }: FollowUserUseData) => object;
  userInfo: userInfoData;
  tweetList: Array<TweetCardUseData>;
  isLogin: boolean;
}

interface userInfoData {
  userNumber: number,
  userImage: any, 
  userName: string, 
  userUniqueName: string, 
  profile: string, 
  userCreatedTime: number, 
  userFollowerNumber: number, 
  userFollowingNumber: number,
}

interface ParamTypes {
  userUniqueName: string;
}

const ProfileContainer: React.FC<ProfileProps> = ({ 
  getUserInfoApi, 
  getUserTweetListApi,
  getUserFollowListApi,
  postFollowUserApi,
  deleteFollowUserApi,
  userInfo, 
  tweetList,
  isLogin
}) => {
  const { userUniqueName } = useParams<ParamTypes>();

  useEffect(() => {
    getUserInfoApi({ userUniqueName });
    getUserTweetListApi({ userUniqueName });
  }, [])

  const onClickHandler = ( event: React.MouseEvent<HTMLButtonElement> ) => {
    const { name } = event.currentTarget;
    switch ( name ) {
      case 'follow':
        postFollowUserApi({ userNumber: userInfo.userNumber });
        break;

      case 'unfollow':
        deleteFollowUserApi({ userNumber: userInfo.userNumber });
        break;

      default:
        break;
    }
  }
  
  return (
    <Main components={
      <Profile
        onClick={onClickHandler}
        userInfo={{
          isLogin,
          ...userInfo
        }}
        tweetList={tweetList}
      />
    }/>
  )
}

const mapStateToProps = (rootState: State) => ({
  isLogin: rootState.userReducer.login,
  userInfo: rootState.userReducer.user,
  tweetList: rootState.tweetReducer.res
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserInfoApi: ({ userUniqueName }: GetUserInfoUseData) => {
    return dispatch(getUserInfoApi.request({ userUniqueName }));
  },
  getUserTweetListApi: ({ userUniqueName }: GetUserTweetListUseData) => {
    return dispatch(getUserTweetListApi.request({ userUniqueName }));
  },
  getFollowUserListApi: ({ userNumber }: FollowUserUseData) => {
    return dispatch(getFollowUserListApi.request({ userNumber }));
  },
  postFollowUserApi: ({ userNumber }: FollowUserUseData) => {
    return dispatch(postFollowUserApi.request({ userNumber }));
  },
  deleteFollowUser: ({ userNumber }: FollowUserUseData) => {
    return dispatch(deleteFollowUserApi.request({ userNumber }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(ProfileContainer)
);