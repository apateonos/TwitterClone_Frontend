import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from '../store/reducers/index';
import { Explore, TweetList, NotFoundTweet } from '../components/index';
import { SearchResultsData } from '../store/reducers/search';
import { Header, Tweet, Search } from './index';
import { ModalComponentData } from '../store/reducers/modal';
import { modal } from '../store/actions/modal';

interface SearchProps extends RouteComponentProps<any> {
  openModal: ({ component }: ModalComponentData) => object;
  results: Array<SearchResultsData>;
}

const SearchContainer: React.FC<SearchProps> = ({
  openModal,
  results
}) => {
  const [ sortType, setSortType ] = useState('latest');
  const [ buttonIdx, setButtonIdx ] = useState(1);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>, idx: number) => {
    const { name } = event.currentTarget;

    switch ( name ) {
      case 'reply':
        openModal({component: <Tweet replyNumber={idx}/>});
        break;

      case 'retweet':
        openModal({component: <Tweet retweetNumber={idx}/>});
        break;
      
      case 'latest':
        setButtonIdx(idx);
        setSortType('latest');
        break;

      case 'top':
        setButtonIdx(idx);
        setSortType('top');
        break;

      case 'user':
        setButtonIdx(idx);

        break;

      case 'photo':
        setButtonIdx(idx);
        setSortType('photo');
        break;
      
      default:
        break;
    }
  }

  return (
    <>
      <Header 
        title={<Search />}
      />
      <Explore 
        onClick={onClickHandler}
        buttonIdx={buttonIdx}
      />
      <TweetList
        onClick={onClickHandler}
        tweets={sort[sortType as 'latest'|'top'|'photo'](results).reverse()}
        notFound={<></>}
      />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  results: rootState.searchReducer.results
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openModal: ({ component }: ModalComponentData) => {
    return dispatch(modal.open({ component }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(SearchContainer)
);

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
}