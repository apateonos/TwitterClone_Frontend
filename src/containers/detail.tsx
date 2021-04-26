import React, { useEffect } from 'react';
import { useParams, withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { useClick } from '../handler/index';
import { GetDetailTweetUseData } from '../api/detail';
import { getDetailTweetApi } from '../store/actions/detail';
import { ReplyData, TweetData } from '../store/reducers/detail';
import { Detail, TweetList } from '../components/index';
import { HeartData, RetweetData } from 'store/reducers/tweet';

interface DetailContainerUseProps extends RouteComponentProps<any> {
  getDetailTweetApi: ({ tweet_id }: GetDetailTweetUseData) => object;
  tweet: TweetData;
  replys: Array<ReplyData>;
  retweets: Array<RetweetData>;
  hearts: Array<HeartData>;
  res: {};
}

interface ParamsTypes {
  tweet_id: string; // 동적라우팅에서 받아온 숫자값이여서 수가 아닌 스트링형태이다... 좀더 간결하게 변환하는법을 잘 생각해보자
}

const DetailContainer: React.FC<DetailContainerUseProps> = ({
  getDetailTweetApi, tweet, replys, retweets, hearts, res
}) => {
  const { tweet_id } = useParams<ParamsTypes>();
  const onClickHandler = useClick();

  useEffect(() => {
    getDetailTweetApi({ tweet_id: Number( tweet_id )});
  }, [tweet_id, res]);

  return (
    <>
      <Detail 
        onClick={onClickHandler}
        tweet={tweet}
        retweets={retweets}
        hearts={hearts}
      />
      <TweetList
        onClick={onClickHandler}
        tweets={replys}
        retweets={retweets}
        hearts={hearts} 
      />
    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  tweet: rootState.detailReducer.tweet,
  replys: rootState.detailReducer.replys,
  retweets: rootState.tweetReducer.retweets,
  hearts: rootState.tweetReducer.hearts,
  res: rootState.tweetReducer.res
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDetailTweetApi: ({ tweet_id }: GetDetailTweetUseData) => {
    return dispatch(getDetailTweetApi.request({ tweet_id }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(DetailContainer)
);