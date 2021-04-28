import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';
import * as Api from '../../api/follow';
import * as types from '../actions/types';
import { postFollowUserApi, deleteFollowUserApi } from '../actions/follow';
import { FollowUseData } from '../../api/follow';

function* postFollowUserApiSaga ({ following_id }: FollowUseData) {
  try {
    const data = yield call(Api.postFollowUser, { following_id });
    if (yield data.code === 'errors') throw Error;
    yield put(postFollowUserApi.success(data));
  } catch (err) {
    yield put(postFollowUserApi.failure(err));
  }
}

function* watchPostFollowUserApiSaga () {
  while (true) {
    const { following_id } = yield take(types.POST_FOLLOW_USER['REQUEST']);
    yield fork(postFollowUserApiSaga, { following_id });
  }
}

function* deleteFollowUserApiSaga ({ following_id }: FollowUseData) {
  try {
    const data = yield call(Api.deleteFollowUser, { following_id });
    if (yield data.code === 'errors') throw Error;
    yield put(deleteFollowUserApi.success(data));
  } catch (err) {
    yield put(deleteFollowUserApi.failure(err));
  }
}

function* watchDeleteFollowUserApiSaga () {
  while (true) {
    const { following_id } = yield take(types.DELETE_FOLLOW_USER['REQUEST']);
    yield fork(deleteFollowUserApiSaga, { following_id });
  }
}

export default function* () {
  yield all([
    fork(watchPostFollowUserApiSaga),
    fork(watchDeleteFollowUserApiSaga),
  ]);
}