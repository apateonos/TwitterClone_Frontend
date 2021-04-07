import React, { useEffect } from 'react';
import { useParams, withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { getDetailTweetApi } from '../store/actions/detail';
import { GetDetailTweetUseData } from '../api/detail';
import { modal } from '../store/actions/modal';
import { ModalComponentData } from '../store/reducers/modal';
import { Header, Tweet } from './index';
import { Detail, TweetList, NotFoundDetail } from '../components/index';
import { DetailReplysData, DetailTweetData } from 'store/reducers/detail';

interface DetailTweetUseProps extends RouteComponentProps<any> {
  getDetailTweetApi: ({ tweetNumber }: GetDetailTweetUseData) => object;
  openModal: ({ component }: ModalComponentData) => object;
  tweet: DetailTweetData;
  replys: Array<DetailReplysData>;
  post: any;
}

interface ParamsTypes {
  tweetNumber: string; // 동적라우팅에서 받아온 숫자값이여서 수가 아닌 스트링형태이다... 좀더 간결하게 변환하는법을 잘 생각해보자
}

const TweetContainer: React.FC<DetailTweetUseProps> = ({
  getDetailTweetApi,
  openModal,
  tweet,
  replys,
  post
}) => {
  const { tweetNumber } = useParams<ParamsTypes>();
  const isTweet = Object.keys(tweet).length > 0 && tweet.constructor === Object;
/*   
  useEffect(() => {
    getDetailTweetApi({ tweetNumber: Number( tweetNumber )});
  }, [post])
*/
  useEffect(() => {
    getDetailTweetApi({ tweetNumber: Number( tweetNumber )});
  }, [tweetNumber]);

/* 
  useEffect(() => {
    getDetailTweetApi({ tweetNumber: Number( tweetNumber )});
  }, []); */

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>, idx: number
  ) => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'reply':
        openModal({
          component: <Tweet replyNumber={idx}/>
        });
        break;

      case 'retweet':
        openModal({
          component: <Tweet retweetNumber={idx}/>
        });
        break;

      default:
        break;
    }
  }

  return (
    <>
      {isTweet ? 
        <>
          <Header 
            title='Tweet'
          />
          <Detail 
            onClick={onClickHandler}
            tweet={tweet}
          />
          <TweetList 
            onClick={onClickHandler}
            tweets={replys}
            notFound={<></>}
          />
        </>
      :
        <NotFoundDetail />
      }
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  tweet: rootState.detailReducer.tweet,
  replys: rootState.detailReducer.replys,
  post: rootState.tweetReducer.res
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDetailTweetApi: ({ tweetNumber }: GetDetailTweetUseData) => {
    return dispatch(getDetailTweetApi.request({ tweetNumber }));
  },
  openModal: ({ component }: ModalComponentData) => {
    return dispatch(modal.open({ component }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(TweetContainer)
);