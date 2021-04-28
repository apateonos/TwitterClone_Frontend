import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { getUserTimelineApi } from '../store/actions/timeline';
import { TweetData } from '../store/reducers/timeline';
import { useClick } from '../handler/index';
import { HeartData, RetweetData } from '../store/reducers/tweet';
import { Header, Tweet } from './index';
import { TweetList } from '../components/index';
import { SelfData } from '../store/reducers/user';
import { FollowsData } from '../store/reducers/follow';

interface HomeContainerProps extends RouteComponentProps<any> {
  getUserTimelineApi: () => object;
  self: SelfData;
  follows: Array<FollowsData>
  tweets: Array<TweetData>;
  retweets: Array<RetweetData>;
  hearts: Array<HeartData>;
  res: [];
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  getUserTimelineApi,
  follows,
  hearts,
  retweets,
  tweets,
  self,
  res,
}) => {
  const onClickHandler = useClick();

  useEffect(() => {
    getUserTimelineApi();
  }, [res]);

  return (
    <>
      <Header title='Home'/>
      <Tweet />
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
  tweets: rootState.timelineReducer.tweets,
  res: rootState.tweetReducer.res,
  self: rootState.userReducer.self,
  follows: rootState.followReducer.follows,
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