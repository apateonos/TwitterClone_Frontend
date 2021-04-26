import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { getUserTimelineApi } from '../store/actions/timeline';
import { TweetData } from '../store/reducers/timeline';
import { useClick } from '../handler/index';
import { HeartData, RetweetData } from '../store/reducers/tweet';
import { Tweet } from './index';
import { TweetList } from '../components/index';

interface HomeContainerProps extends RouteComponentProps<any> {
  getUserTimelineApi: () => object;
  tweets: Array<TweetData>;
  retweets: Array<RetweetData>;
  hearts: Array<HeartData>;
  res: [];
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  getUserTimelineApi,
  hearts,
  retweets,
  tweets,
  res,
}) => {
  const onClickHandler = useClick();

  useEffect(() => {
    getUserTimelineApi();
  }, [res]);

  return (
    <>
      <Tweet />
      <TweetList 
        onClick={onClickHandler}
        tweets={tweets}
        retweets={retweets}
        hearts={hearts}
      />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  tweets: rootState.timelineReducer.tweets,
  res: rootState.tweetReducer.res,
  retweets: rootState.tweetReducer.retweets,
  hearts: rootState.tweetReducer.hearts
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserTimelineApi: () => {
    return dispatch(getUserTimelineApi.request());
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(HomeContainer)
);