import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';
import * as Api from '../../api/follow';
import * as types from '../actions/types';
import { postFollowUserApi, deleteFollowUserApi } from '../actions/follow';
import { FollowUseData } from '../../api/follow';

function* postFollowUserApiSaga ({ follower_id }: FollowUseData) {
  try {
    const data = yield call(Api.postFollowUser, { follower_id });
    if (yield data.code === 'errors') throw Error;
    yield put(postFollowUserApi.success(data));
  } catch (err) {
    yield put(postFollowUserApi.failure(err));
  }
}

function* watchPostFollowUserApiSaga () {
  while (true) {
    const { follower_id } = yield take(types.POST_FOLLOW_USER['REQUEST']);
    yield fork(postFollowUserApiSaga, { follower_id });
  }
}

function* deleteFollowUserApiSaga ({ follower_id }: FollowUseData) {
  try {
    const data = yield call(Api.deleteFollowUser, { follower_id });
    if (yield data.code === 'errors') throw Error;
    yield put(deleteFollowUserApi.success(data));
  } catch (err) {
    yield put(deleteFollowUserApi.failure(err));
  }
}

function* watchDeleteFollowUserApiSaga () {
  while (true) {
    const { follower_id } = yield take(types.DELETE_FOLLOW_USER['REQUEST']);
    yield fork(deleteFollowUserApiSaga, { follower_id });
  }
}

export default function* () {
  yield all([
    fork(watchPostFollowUserApiSaga),
    fork(watchDeleteFollowUserApiSaga),
  ]);
}