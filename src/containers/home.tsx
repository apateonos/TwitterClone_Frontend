import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { Main, Home } from '../pages/index';
import { getUserTimelineApi } from '../store/actions/timeline';
import { TweetCardUseData } from '../components/base/tweetCard/tweetCard';


interface HomeContainerProps extends RouteComponentProps<any> {
  getUserTimelineApi: () => object;
  timeline: Array<TweetCardUseData>;
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  getUserTimelineApi,
  timeline
}) => {
  useEffect(()=> {
    getUserTimelineApi();
    setInterval(()=>getUserTimelineApi(), 60000);
  }, [])

  return (
    <Main components = {<Home
      timeline={timeline}
      />}
      title='Home'
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  timeline: rootState.timelineReducer.res
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserTimelineApi: ()=> {
    return dispatch(getUserTimelineApi.request());
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(HomeContainer)
);