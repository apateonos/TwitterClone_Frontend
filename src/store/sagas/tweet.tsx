import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/tweet';
import * as types from '../actions/types';
import { postUserTweetApi, updateUserTweetApi, deleteUserTweetApi } from '../actions/tweet';
import { PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData } from '../../api/tweet';

function* postUserTweetApiSaga({ tweet, imageFile, replyNumber, retweetNumber }: PostUserTweetUseData) {
  try {
    const data = yield call(Api.postUserTweet, { tweet, imageFile, replyNumber, retweetNumber });
    if (yield data.code === 'errors') throw Error;
    yield put(postUserTweetApi.success(data));
    yield put({type: 'CLOSE_MODAL'});
  } catch (err) {
    yield put(postUserTweetApi.failure(err));
  }
}

function* watchPostUserTweetApiSaga() {
  while (true) {
    const { tweet, imageFile, replyNumber, retweetNumber } = yield take(types.POST_USER_TWEET[types.REQUEST]);
    console.log('saga', tweet, imageFile, replyNumber, retweetNumber);
    yield fork(postUserTweetApiSaga, { tweet, imageFile, replyNumber, retweetNumber });
  }
}

function* updateUserTweetApiSaga({ tweetNumber, tweet, imageFile }: UpdateUserTweetUseData){
  try {
    const data = yield call(Api.updateUserTweet, { tweetNumber, tweet, imageFile });
    if (yield data.code === 'error') throw Error;
    yield put(updateUserTweetApi.success(data));
  } catch (err) {
    yield put(updateUserTweetApi.failure(err));
  }
}

function* watchUpdateUserTweetApiSaga() {
  while (true) {
    const { tweetNumber, tweet, imageFile } = yield take(types.UPDATE_USER_TWEET[types.REQUEST]);
    yield fork(updateUserTweetApiSaga, { tweetNumber, tweet, imageFile });
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
    fork(watchPostUserTweetApiSaga),
    fork(watchUpdateUserTweetApiSaga),
    fork(watchDeleteUserTweetApiSaga)
  ]);
}
