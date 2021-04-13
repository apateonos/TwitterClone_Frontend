import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from '../store/reducers/index';
import { Explore, TweetList, UserList, NotFoundTweet } from '../components/index';
import { SearchResultsData } from '../store/reducers/search';
import { Header, Tweet, Search } from './index';
import { ModalComponentData } from '../store/reducers/modal';
import { modal } from '../store/actions/modal';
import { FollowUseData } from '../api/follow';
import { Login } from './index';
import { UserSelfData } from '../store/reducers/user';
import { deleteFollowUserApi, postFollowUserApi } from '../store/actions/follow';


interface SearchProps extends RouteComponentProps<any> {
  postFollowUserApi: ({ userNumber }: FollowUseData) => object;
  deleteFollowUserApi: ({ userNumber }: FollowUseData) => object;
  openModal: ({ component }: ModalComponentData) => object;
  results: Array<SearchResultsData>;
  self: UserSelfData;
}

const SearchContainer: React.FC<SearchProps> = ({
  postFollowUserApi,
  deleteFollowUserApi,
  openModal,
  results,
  self
}) => {
  const isLogin = Object.keys(self).length > 0 && self.constructor === Object;
  const [ sortType, setSortType ] = useState('latest');
  const [ buttonIdx, setButtonIdx ] = useState(1);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>, idx: number) => {
    const { name } = event.currentTarget;

    switch ( name ) {
      case 'follow':
        if (isLogin) {
          postFollowUserApi({ userNumber: idx });
        }
        else {
          openModal({ component: <Login />});
        }
        break;
      
      case 'unfollow':
        deleteFollowUserApi({ 
          userNumber: idx 
        });
        break;

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

      case 'people':
        setButtonIdx(idx);
        setSortType('people');
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
      {sortType !== 'people' ?
        <TweetList
          onClick={onClickHandler}
          tweets={sort[sortType as 'latest'|'top'|'photo'](results).reverse()}
          notFound={<></>}
        />
        :
        <UserList 
          onClick={onClickHandler}
          users={results.filter((item, i) => {
            return (
              results.findIndex((item2, j) => {
                return item.user_id === item2.user_id;
              }) === i
            );
          })}
        />
      }
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  results: rootState.searchReducer.results,
  self: rootState.userReducer.self
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openModal: ({ component }: ModalComponentData) => {
    return dispatch(modal.open({ component }));
  },
  postFollowUserApi: ({ userNumber }: FollowUseData) => {
    return dispatch(postFollowUserApi.request({ userNumber }));
  },
  deleteFollowUserApi: ({ userNumber }: FollowUseData) => {
    return dispatch(deleteFollowUserApi.request({ userNumber }));
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