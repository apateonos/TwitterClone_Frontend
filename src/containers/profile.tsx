import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { GetUserProfileUseData } from '../api/user';
import { getUserTweetListApi, postUserTweetApi, updateUserTweetApi, deleteUserTweetApi } from '../store/actions/tweet';
import { GetUserTweetListUseData } from '../api/tweet';
import { Main, Profile } from '../pages/index';
import { TweetCardUseData } from '../components/base/tweetCard/tweetCard';
import { FollowUserUseData } from '../api/follow';
import { getFollowUserListApi, deleteFollowUserApi, postFollowUserApi } from '../store/actions/follow';
import { getUserProfileApi } from '../store/actions/user';
import { PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData, getUserTweetList } from '../api/tweet';


interface ProfileProps extends RouteComponentProps<any> {
  getUserProfileApi: ({ userUniqueName }: GetUserProfileUseData) => object;
  getUserTweetListApi: ({ userUniqueName }: GetUserTweetListUseData) => object;
  tweetList: Array<TweetCardUseData>;
}

interface ParamTypes {
  userUniqueName: string;
}

const ProfileContainer: React.FC<ProfileProps> = ({
  getUserProfileApi, 
  getUserTweetListApi,
  tweetList
}) => {
  const { userUniqueName } = useParams<ParamTypes>();
  
  useEffect(() => {
    getUserProfileApi({ userUniqueName });
    getUserTweetListApi({ userUniqueName });
  }, [])

  return (
    <Main components={
      <Profile tweetList={tweetList}/>
      }
      title='Profile'
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  tweetList: rootState.tweetReducer.res
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserProfileApi: ({ userUniqueName }: GetUserProfileUseData) => {
    return dispatch(getUserProfileApi.request({ userUniqueName }));
  },
  getUserTweetListApi: ({ userUniqueName }: GetUserTweetListUseData) => {
    return dispatch(getUserTweetListApi.request({ userUniqueName }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(ProfileContainer)
);