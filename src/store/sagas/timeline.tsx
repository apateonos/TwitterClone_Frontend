import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/timeline';
import * as types from '../actions/types';
import { getUserTimelineApi } from '../actions/timeline';

function* getUserTimelineApiSaga () {
  try {
    const data = yield call(Api.getUserTimeline);
    if (yield data.code === 'errors') throw Error;
    yield put(getUserTimelineApi.success(data));
  } catch (err) {
    yield put(getUserTimelineApi.failure(err));
  }
}

function* watchGetUserTimelineApiSaga() {
  while (true) {
    yield take(types.GET_USER_TIMELINE['REQUEST']);
    yield fork(getUserTimelineApiSaga);
  }
}

export default function* () {
  yield all([
    fork(watchGetUserTimelineApiSaga)
  ])
}