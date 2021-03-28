import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/tweet';
import * as types from '../actions/types';
import { getUserTweetListApi, postUserTweetApi, updateUserTweetApi, deleteUserTweetApi } from '../actions/tweet';
import { GetUserTweetListUseData, PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData } from '../../api/tweet';

function* getUserTweetListApiSaga({ userUniqueName }: GetUserTweetListUseData) {
  try {
    const data = yield call(Api.getUserTweetList, { userUniqueName });
    if (yield data.code === 'errors') throw Error;
    yield put(getUserTweetListApi.success(data));
  } catch (err) {
    yield put(getUserTweetListApi.failure(err));
  }
}

function* watchGetUserTweetListApiSaga() {
  while (true) {
    const { userUniqueName } = yield take(types.GET_USER_TWEET_LIST[types.REQUEST]);
    yield fork(getUserTweetListApiSaga, { userUniqueName });
  } 
}

function* postUserTweetApiSaga({ tweetContent, tweetImage, replyTweetNumber, retweetNumber }: PostUserTweetUseData) {
  try {
    const data = yield call(Api.postUserTweet, { tweetContent, tweetImage, replyTweetNumber, retweetNumber });
    if (yield data.code === 'errors') throw Error;
    yield put(postUserTweetApi.success(data));
    yield put({type: 'CLOSE_MODAL'});
  } catch (err) {
    yield put(postUserTweetApi.failure(err));
  }
}

function* watchPostUserTweetApiSaga() {
  while (true) {
    const { tweetContent, tweetImage, replyTweetNumber, retweetNumber } = yield take(types.POST_USER_TWEET[types.REQUEST]);
    yield fork(postUserTweetApiSaga, { tweetContent, tweetImage, replyTweetNumber, retweetNumber });
  }
}

function* updateUserTweetApiSaga({ tweetNumber, tweetContent, tweetImage }: UpdateUserTweetUseData){
  try {
    const data = yield call(Api.updateUserTweet, { tweetNumber, tweetContent, tweetImage });
    if (yield data.code === 'error') throw Error;
    yield put(updateUserTweetApi.success(data));
  } catch (err) {
    yield put(updateUserTweetApi.failure(err));
  }
}

function* watchUpdateUserTweetApiSaga() {
  while (true) {
    const { tweetNumber, tweetContent, tweetImage } = yield take(types.UPDATE_USER_TWEET[types.REQUEST]);
    yield fork(updateUserTweetApiSaga, { tweetNumber, tweetContent, tweetImage });
  }
}

function* deleteUserTweetApiSaga({ tweetNumber }: DeleteUserTweetUseData){
  try {
    const data = yield call(Api.deleteUserTweet, { tweetNumber });
    if (yield data.code === 'error') throw Error;
    yield put(deleteUserTweetApi.success(data));
  } catch (err) {
    yield put(deleteUserTweetApi.failure(err));
  }
}

function* watchDeleteUserTweetApiSaga() {
  while (true) {
    const { tweetNumber } = yield take(types.DELETE_USER_TWEET[types.REQUEST]);
    yield fork(deleteUserTweetApiSaga, { tweetNumber });
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
