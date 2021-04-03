import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { getUserTimelineApi } from '../store/actions/timeline';
import { modal } from '../store/actions/modal';
import { Tweet } from './index';
import { TweetList } from '../components/index';
import { TimelineTweetsData } from '../store/reducers/timeline';

interface HomeContainerProps extends RouteComponentProps<any> {
  getUserTimelineApi: () => object;
  useModal: (component: JSX.Element) => object;
  tweets: Array<TimelineTweetsData>;
  post: [];
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  getUserTimelineApi,
  useModal,
  tweets,
  post,
}) => {
  useEffect(() => {
    getUserTimelineApi();
  }, [post]);

  useEffect(() => {
    getUserTimelineApi();
  }, []);

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>, tweetNumber?: number
  ) => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'reply':
        useModal(<Tweet replyNumber={tweetNumber}/>);
        break;

      case 'retweet':
        useModal(<Tweet retweetNumber={tweetNumber}/>);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Tweet />
      <TweetList 
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
  useModal: (component: JSX.Element) => {
    return dispatch(modal.open({ component }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(HomeContainer)
);