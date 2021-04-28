import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { useClick } from '../handler/index';
import { GetUserProfileUseData } from 'api/profile';
import { getUserProfileApi } from '../store/actions/profile';
import { SelfData } from '../store/reducers/user';
import { FollowerData, FollowingData, TweetData, UserData } from '../store/reducers/profile';
import { FollowsData } from '../store/reducers/follow';
import { HeartData, RetweetData } from '../store/reducers/tweet';
import { Profile, TweetList } from '../components/index';


interface ProfileContainerUseProps extends RouteComponentProps<any> {
  getUserProfileApi: ({ unique_name }: GetUserProfileUseData) => object;
  self: SelfData;
  user: UserData;
  tweets: Array<TweetData>;
  follows: Array<FollowsData>;
  follower: Array<FollowerData>;
  following: Array<FollowingData>;
  hearts: Array<HeartData>;
  retweets: Array<RetweetData>;
  res: {};
}

interface ParamTypes {
  unique_name: string;
}

const ProfileContainer: React.FC<ProfileContainerUseProps> = ({
  getUserProfileApi,
  self,
  user,
  tweets,
  follows,
  following,
  retweets,
  hearts,
  follower,
  res,
}) => {

  const { unique_name } = useParams<ParamTypes>();

  useEffect(() => {
    getUserProfileApi({ unique_name });
  }, [res, follows, retweets, hearts]);
  
  return (
    <>
      <Profile
        self={self}
        follows={follows}
        user={user}
        following={following}
        follower={follower}
      />
      <TweetList 
        self={self}
        follows={follows}
        tweets={tweets}
        retweets={retweets}
        hearts={hearts}
      />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self,
  user: rootState.profileReducer.user,
  tweets: rootState.profileReducer.tweets,
  follows: rootState.followReducer.follows,
  retweets: rootState.tweetReducer.retweets,
  hearts: rootState.tweetReducer.hearts,
  res: rootState.tweetReducer.res,
  following: rootState.profileReducer.following,
  follower: rootState.profileReducer.follower
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserProfileApi: ({ unique_name }: GetUserProfileUseData) => {
    return dispatch(getUserProfileApi.request({ unique_name }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(ProfileContainer)
);