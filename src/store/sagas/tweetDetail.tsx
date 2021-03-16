import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/tweetDetail';
import * as types from '../actions/types';
import { getTweetDetailApi } from '../actions/tweetDetail';
import { GetTweetDetailUseData } from '../../api/tweetDetail';

function* getTweetDetailApiSaga({ tweetNumber }: GetTweetDetailUseData) {
  try {
    const data = yield call(Api.getTweetDetail, { tweetNumber });
    if (yield data.code === 'errors') throw Error;
    console.log(data);
    yield put(getTweetDetailApi.success(data));
  } catch (err) {
    yield put(getTweetDetailApi.failure(err));
  }
}

function* watchGetTweetDetailApiSaga() {
  while (true) {
    const { tweetNumber } = yield take(types.GET_TWEET_DETAIL[types.REQUEST]);
    yield fork(getTweetDetailApiSaga, { tweetNumber });
  } 
}

export default function* () {
  yield all([
    fork(watchGetTweetDetailApiSaga)
  ]);
}