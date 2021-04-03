import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/timeline';
import * as types from '../actions/types';
import { getUserTimelineApi } from '../actions/timeline';
import { GetUserTimelineUseData } from '../../api/timeline';

function* getUserTimelineApiSaga({ pickupCount }: GetUserTimelineUseData) {
  try {
    const data = yield call(Api.getUserTimeline, { pickupCount });
    if (yield data.code === 'errors') throw Error;
    yield put(getUserTimelineApi.success(data));
  } catch (err) {
    yield put(getUserTimelineApi.failure(err));
  }
}

function* watchGetUserTimelineApiSaga() {
  while (true) {
    const { pickupCount } = yield take(types.GET_USER_TIMELINE['REQUEST']);
    yield fork(getUserTimelineApiSaga, { pickupCount });
  }
}

export default function* () {
  yield all([
    fork(watchGetUserTimelineApiSaga)
  ])
}