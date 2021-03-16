import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/follow';
import * as types from '../actions/types';
import { getFollowUserListApi, postFollowUserApi, deleteFollowUserApi } from '../actions/follow';
import { FollowUserUseData, GetFollowUserListUseData } from '../../api/follow';

function* getFollowUserListApiSaga({ userNumber }: GetFollowUserListUseData) {
  try {
    const data = yield call(Api.getFollowUserList, { userNumber });
    if (yield data.code === 'errors') throw Error;
    yield put(getFollowUserListApi.success(data));
  } catch (err) {
    yield put(getFollowUserListApi.failure(err));
  }
}

function* watchGetFollowUserListApiSaga() {
  while (true) {
    const { userNumber } = yield take(types.GET_FOLLOW_USER_LIST[types.REQUEST]);
    yield fork(getFollowUserListApiSaga, { userNumber });
  }
}

function* postFollowUserApiSaga({ userNumber }: FollowUserUseData) {
  try {
    const data = yield call(Api.postFollowUser, { userNumber });
    if (yield data.code === 'errors') throw Error;
    yield put(postFollowUserApi.success(data));
  } catch (err) {
    yield put(postFollowUserApi.failure(err));
  }
}

function* watchPostFollowUserApiSaga() {
  while (true) {
    const { userNumber } = yield take(types.POST_FOLLOW_USER[types.REQUEST]);
    yield fork(postFollowUserApiSaga, { userNumber });
  }
}

function* deleteFollowUserApiSaga({ userNumber }: FollowUserUseData) {
  try {
    const data = yield call(Api.deleteFollowUser, { userNumber });
    if (yield data.code === 'errors') throw Error;
    yield put(deleteFollowUserApi.success(data));
  } catch (err) {
    yield put(deleteFollowUserApi.failure(err));
  }
}

function* watchDeleteFollowUserApiSaga() {
  while (true) {
    const { userNumber } = yield take(types.DELETE_FOLLOW_USER[types.REQUEST]);
    yield fork(deleteFollowUserApiSaga, { userNumber });
  }
}

export default function* () {
  yield all([
    fork(watchGetFollowUserListApiSaga),
    fork(watchPostFollowUserApiSaga),
    fork(watchDeleteFollowUserApiSaga)
  ]);
}