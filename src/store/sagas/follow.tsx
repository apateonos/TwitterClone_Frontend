import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/follow';
import * as types from '../actions/types';
import { getFollowUserListApi, postFollowUserApi, deleteFollowUserApi } from '../actions/follow';
import { FollowUserUseData } from '../../api/follow';

function* getFollowUserListApiSaga() {
  try {
    const data = yield call(Api.getFollowUserList);
    if (yield data.code === 'errors') throw Error;
    yield put(getFollowUserListApi.success(data));
  } catch (err) {
    yield put(getFollowUserListApi.failure(err));
  }
}

function* watchGetFollowUserListApiSaga() {
  while (true) {
    yield fork(getFollowUserListApiSaga);
  }
}

function* postFollowUserApiSaga({ user_id }: FollowUserUseData) {
  try {
    const data = yield call(Api.postFollowUser, { user_id });
    if (yield data.code === 'errors') throw Error;
    yield put(postFollowUserApi.success(data));
  } catch (err) {
    yield put(postFollowUserApi.failure(err));
  }
}

function* watchPostFollowUserApiSaga() {
  while (true) {
    const { user_id } = yield take(types.POST_FOLLOW_USER[types.REQUEST]);
    yield fork(postFollowUserApiSaga, { user_id });
  }
}

function* deleteFollowUserApiSaga({ user_id }: FollowUserUseData) {
  try {
    const data = yield call(Api.deleteFollowUser, { user_id });
    if (yield data.code === 'errors') throw Error;
    yield put(deleteFollowUserApi.success(data));
  } catch (err) {
    yield put(deleteFollowUserApi.failure(err));
  }
}

function* watchDeleteFollowUserApiSaga() {
  while (true) {
    const { user_id } = yield take(types.DELETE_FOLLOW_USER[types.REQUEST]);
    yield fork(deleteFollowUserApiSaga, { user_id });
  }
}

export default function* () {
  yield all([
    fork(watchGetFollowUserListApiSaga),
    fork(watchPostFollowUserApiSaga),
    fork(watchDeleteFollowUserApiSaga)
  ]);
}