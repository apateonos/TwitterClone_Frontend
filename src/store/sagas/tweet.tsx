import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/tweet';
import * as types from '../actions/types';
import { getUserTweetListApi, postUserTweetApi, updateUserTweetApi, deleteUserTweetApi } from '../actions/tweet';
import { GetUserTweetListUseData, PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData } from '../../api/tweet';

function* getUserTweetListApiSaga({ user_id }: GetUserTweetListUseData) {
  try {
    const data = yield call(Api.getUserTweetList, { user_id });
    if (yield data.code === 'errors') throw Error;
    yield put(getUserTweetListApi.success(data));
  } catch (err) {
    yield put(getUserTweetListApi.failure(err));
  }
}

function* watchGetUserTweetListApiSaga() {
  while (true) {
    const { user_id } = yield take(types.GET_USER_TWEET_LIST[types.REQUEST]);
    yield fork(getUserTweetListApiSaga, { user_id });
  } 
}

function* postUserTweetApiSaga({ tweet }: PostUserTweetUseData) {
  try {
    const data = yield call(Api.postUserTweet, { tweet });
    if (yield data.code === 'errors') throw Error;
    yield put(postUserTweetApi.success(data));
  } catch (err) {
    yield put(postUserTweetApi.failure(err));
  }
}

function* watchPostUserTweetApiSaga() {
  while (true) {
    const { tweet } = yield take(types.POST_USER_TWEET[types.REQUEST]);
    yield fork(postUserTweetApiSaga, { tweet });
  }
}

function* updateUserTweetApiSaga({ tweet_id, tweet }: UpdateUserTweetUseData){
  try {
    const data = yield call(Api.updateUserTweet, { tweet_id, tweet });
    if (yield data.code === 'error') throw Error;
    yield put(updateUserTweetApi.success(data));
  } catch (err) {
    yield put(updateUserTweetApi.failure(err));
  }
}

function* watchUpdateUserTweetApiSaga() {
  while (true) {
    const { tweet_id, tweet } = yield take(types.UPDATE_USER_TWEET[types.REQUEST]);
    yield fork(updateUserTweetApiSaga, { tweet_id, tweet });
  }
}

function* deleteUserTweetApiSaga({ tweet_id }: DeleteUserTweetUseData){
  try {
    const data = yield call(Api.deleteUserTweet, { tweet_id });
    if (yield data.code === 'error') throw Error;
    yield put(deleteUserTweetApi.success(data));
  } catch (err) {
    yield put(deleteUserTweetApi.failure(err));
  }
}

function* watchDeleteUserTweetApiSaga() {
  while (true) {
    const { tweet_id } = yield take(types.DELETE_USER_TWEET[types.REQUEST]);
    yield fork(deleteUserTweetApiSaga, { tweet_id });
  }
}

export default function* () {
  yield all([
    fork(watchGetUserTweetListApiSaga),
    fork(watchPostUserTweetApiSaga),
    fork(watchUpdateUserTweetApiSaga),
    fork(watchDeleteUserTweetApiSaga)
  ]);
}
