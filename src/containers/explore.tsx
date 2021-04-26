import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from '../store/reducers/index';
import { useChange, useClick, useSubmit } from '../handler/index';
import { SelfData } from '../store/reducers/user';
import { ResultData } from '../store/reducers/search';

interface SearchContainerUseProps extends RouteComponentProps<any> {
  results: Array<ResultData>;
  self: SelfData;
}

const initialState = { keyword: '' };
const SearchContainer: React.FC<SearchContainerUseProps> = ({
  results,
  self
}) => {
  const [ state, inputState ] = useChange(initialState);
  const onSubmitHandler = useSubmit(state);
  const onClickHandler = useClick();

  useEffect(() => {

  }, []);

  return (
    <>
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  results: rootState.searchReducer.results,
  self: rootState.userReducer.self
})

export default withRouter(
  compose(connect(mapStateToProps))(SearchContainer)
);
/* 
const sort = {
  latest: (tweets: Array<SearchResultsData>) => tweets.sort((a, b) => {
    if (a.created_at > b.created_at) {
      return 1;
    }
    if (a.created_at < b.created_at) {
      return -1;
    }
    return 0;
  }),
  top: (tweets: Array<SearchResultsData>) => tweets.sort((a, b) => {
    if (a.tweet_view > b.tweet_view) {
      return 1;
    }
    if (a.tweet_view < b.tweet_view) {
      return -1;
    }
    return 0;
  }),
  photo: (tweets: Array<SearchResultsData>) => tweets.filter((tweets) => {
    const isImage = tweets.tweet_image !== undefined && typeof(tweets.tweet_image) === 'string';

    if (isImage) return true;
    return false;
  }),
} */