import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/detail';
import * as types from '../actions/types';
import { getDetailTweetApi } from '../actions/detail';
import { GetDetailTweetUseData } from '../../api/detail';

function* getDetailTweetApiSaga({ tweet_id }: GetDetailTweetUseData) {
  try {
    const data = yield call(Api.getDetailTweet, { tweet_id });
    if (yield data.code === 'errors') throw Error;
    yield put(getDetailTweetApi.success(data));
  } catch (err) {
    yield put(getDetailTweetApi.failure(err));
  }
}

function* watchgetDetailTweetApiSaga() {
  while (true) {
    const { tweet_id } = yield take(types.GET_DETAIL_TWEET['REQUEST']);
    yield fork(getDetailTweetApiSaga, { tweet_id });
  } 
}

export default function* () {
  yield all([
    fork(watchgetDetailTweetApiSaga)
  ]);
}