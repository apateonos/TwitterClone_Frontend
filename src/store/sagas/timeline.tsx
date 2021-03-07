import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/timeline';
import { getUserTimelineApi } from '../actions/timeline';

function* getUserTimelineApiSaga() {
  try {
    const data = yield call(Api.getTimeLine);
    if (yield data.code === 'errors') throw Error;
    yield put(getUserTimelineApi.success(data));
  } catch (err) {
    yield put(getUserTimelineApi.failure(err));
  }
}

function* watchGetUserTimelineApiSaga() {
  while (true) {
    yield fork(getUserTimelineApiSaga);
  }
}

export default function* () {
  yield all([
    fork(watchGetUserTimelineApiSaga)
  ])
}