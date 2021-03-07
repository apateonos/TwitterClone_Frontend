import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { postUserTweetApi, updateUserTweetApi, deleteUserTweetApi } from '../store/actions/tweet';
import { PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData } from '../api/tweet';
import { Main, Home } from '../pages/index';
import { getUserTimelineApi } from '../store/actions/timeline';
import { GetUserTimelineUseData } from 'api/timeline';

interface HomeContainerProps extends RouteComponentProps<any> {
  postUserTweetApi: ({ tweet }: PostUserTweetUseData) => object;
  updateUserTweetApi: ({ tweet_id, tweet }: UpdateUserTweetUseData) => object;
  deleteUserTweetApi: ({ tweet_id }: DeleteUserTweetUseData) => object;
  getUserTimelineApi: () => object;
  timeline: [];
  user: object;
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  postUserTweetApi,
  updateUserTweetApi,
  deleteUserTweetApi,
  getUserTimelineApi,
  timeline,
  user,
}) => {
  const [ tweet, setTweet ] = useState('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  useEffect(()=> {
  }, [])
  return (
    <Main components = {<Home
      onChange={onChangeHandler}
      onClick={onClickHandler}
      timeLine={[]}
      tweet={tweet}
    />}/>
  )
}

const mapStateToProps = (rootState: State) => ({
  user: rootState.userReducer.user,
  timeline: rootState.timelineReducer.timeline
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  postUserTweetApi: ({ tweet }: PostUserTweetUseData) => {
    return dispatch(postUserTweetApi.request({ tweet }));
  },
  updateUserTweetApi: ({ tweet_id, tweet }: UpdateUserTweetUseData) => {
    return dispatch(updateUserTweetApi.request({ tweet_id, tweet }));
  },
  deleteUserTweetApi: ({ tweet_id }: DeleteUserTweetUseData) => {
    return dispatch(deleteUserTweetApi.request({ tweet_id }));
  },
  getUserTimelineApi: ({ id }: GetUserTimelineUseData)=> {
    return dispatch(getUserTimelineApi.request({ id }));
  }
});

export default withRouter(
  compose(connect(null, mapDispatchToProps))(HomeContainer)
);