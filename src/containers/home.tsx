import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { getUserTimelineApi } from '../store/actions/timeline';
import { modal } from '../store/actions/modal';
import { Header, Tweet } from './index';
import { Home } from '../components/index';
import { TimelineTweetsData } from '../store/reducers/timeline';
import { deleteUserTweetApi } from '../store/actions/tweet';
import { DeleteUserTweetUseData } from '../api/tweet';
import { ModalComponentData } from '../store/reducers/modal';

interface HomeContainerProps extends RouteComponentProps<any> {
  getUserTimelineApi: () => object;
  deleteUserTweetApi: ({ tweetNumber }: DeleteUserTweetUseData) => object;
  openModal: ({ component }: ModalComponentData) => object;
  tweets: Array<TimelineTweetsData>;
  post: [];
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  getUserTimelineApi,
  deleteUserTweetApi,
  openModal,
  tweets,
  post,
}) => {
  useEffect(() => {
    getUserTimelineApi();
  }, [post]);

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>, idx: number
  ) => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'reply':
        openModal({component: <Tweet replyNumber={idx}/>});
        break;

      case 'retweet':
        openModal({component: <Tweet retweetNumber={idx}/>});
        break;
      
      case 'delete':
        deleteUserTweetApi({ tweetNumber: idx });
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Header 
        title='Home'
      />
      <Home 
        onClick={onClickHandler}
        tweets={tweets}
      />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  tweets: rootState.timelineReducer.tweets,
  post: rootState.tweetReducer.res
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserTimelineApi: () => {
    return dispatch(getUserTimelineApi.request());
  },
  openModal: ({component}: ModalComponentData) => {
    return dispatch(modal.open({ component }));
  },
  deleteUserTweetApi: ({ tweetNumber }: DeleteUserTweetUseData) => {
    return dispatch(deleteUserTweetApi.request({ tweetNumber }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(HomeContainer)
);