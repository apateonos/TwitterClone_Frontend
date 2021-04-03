import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/detail';
import * as types from '../actions/types';
import { getDetailTweetApi } from '../actions/detail';
import { GetDetailTweetUseData } from '../../api/detail';

function* getDetailTweetApiSaga({ tweetNumber }: GetDetailTweetUseData) {
  try {
    const data = yield call(Api.getDetailTweet, { tweetNumber });
    if (yield data.code === 'errors') throw Error;
    console.log(data);
    yield put(getDetailTweetApi.success(data));
  } catch (err) {
    yield put(getDetailTweetApi.failure(err));
  }
}

function* watchgetDetailTweetApiSaga() {
  while (true) {
    const { tweetNumber } = yield take(types.GET_DETAIL_TWEET['REQUEST']);
    yield fork(getDetailTweetApiSaga, { tweetNumber });
  } 
}

export default function* () {
  yield all([
    fork(watchgetDetailTweetApiSaga)
  ]);
}