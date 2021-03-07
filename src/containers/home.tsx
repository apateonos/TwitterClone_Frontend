import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { postUserTweetApi, updateUserTweetApi, deleteUserTweetApi } from '../store/actions/tweet';
import { PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData } from '../api/tweet';
import { Main, Home } from '../pages/index';
import { getUserTimelineApi } from '../store/actions/timeline';

interface HomeContainerProps extends RouteComponentProps<any> {
  postUserTweetApi: ({ tweet }: PostUserTweetUseData) => object;
  updateUserTweetApi: ({ tweet_id, tweet }: UpdateUserTweetUseData) => object;
  deleteUserTweetApi: ({ tweet_id }: DeleteUserTweetUseData) => object;
  getUserTimelineApi: () => object;
  timeline: [];
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  postUserTweetApi,
  updateUserTweetApi,
  deleteUserTweetApi,
  getUserTimelineApi,
  timeline
}) => {
  const [ tweet, setTweet ] = useState('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    switch (name) {
      case 'tweet': setTweet(value)
        break;
      default:
        break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    /* const { name, key } = event.currentTarget;
    switch (name) {
      case 'postTweet': postUserTweetApi({tweet});
      case 'updateTweet': updateUserTweetApi({tweet_id: key, tweet});
      case 'deleteTweet': deleteUserTweetApi({ tweet_id: key });
    } */
  }

  useEffect(() => {
    getUserTimelineApi();
  },[])

  return (
    <Main components = {<Home
      onChange={onChangeHandler}
      onClick={onClickHandler}
      timeLine={timeline}
      tweet={tweet}
    />}/>
  )
}

const mapStateToProps = (rootState: State) => ({
  timeline: rootState.userReducer.payload
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
  getUserTimelineApi: ()=> {
    return dispatch(getUserTimelineApi.request());
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(HomeContainer)
);
