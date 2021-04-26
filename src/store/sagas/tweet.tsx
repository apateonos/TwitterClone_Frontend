import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/tweet';
import * as types from '../actions/types';
import { postTweetApi, deleteTweetApi, postRetweetApi, deleteRetweetApi, postHeartApi, deleteHeartApi } from '../actions/tweet';
import { PostTweetUseData, DeleteTweetUseData, PostRetweetUseData, DeleteRetweetUseData, PostHeartUseData, DeleteHeartUseData } from '../../api/tweet';

function* postTweetApiSaga({ tweet_text, imageFile, reply_id }: PostTweetUseData) {
  try {
    const data = yield call(Api.postTweet, { tweet_text, imageFile, reply_id });
    if (yield data.code === 'errors') throw Error;
    yield put(postTweetApi.success(data));
    yield put({type: 'CLOSE_MODAL'});
  } catch (err) {
    yield put(postTweetApi.failure(err));
  }
}

function* watchPostTweetApiSaga() {
  while (true) {
    const { tweet_text, imageFile, reply_id } = yield take(types.POST_TWEET['REQUEST']);
    yield fork(postTweetApiSaga, { tweet_text, imageFile, reply_id });
  }
}

function* deleteTweetApiSaga({ tweet_id }: DeleteTweetUseData){
  try {
    const data = yield call(Api.deleteTweet, { tweet_id });
    if (yield data.code === 'error') throw Error;
    yield put(deleteTweetApi.success(data));
  } catch (err) {
    yield put(deleteTweetApi.failure(err));
  }
}

function* watchDeleteTweetApiSaga() {
  while (true) {
    const { tweet_id } = yield take(types.DELETE_TWEET['REQUEST']);
    yield fork(deleteTweetApiSaga, { tweet_id });
  }
}

function* postRetweetApiSaga({ tweet_id }: PostRetweetUseData){
  try {
    const data = yield call(Api.postRetweet, { tweet_id });
    if (yield data.code === 'error') throw Error;
    yield put(postRetweetApi.success(data));
  } catch (err) {
    yield put(postRetweetApi.failure(err));
  }
}

function* watchPostRetweetApiSaga() {
  while (true) {
    const { tweet_id } = yield take(types.POST_RETWEET['REQUEST']);
    yield fork(postRetweetApiSaga, { tweet_id });
  }
}

function* deleteRetweetApiSaga({ tweet_id }: DeleteRetweetUseData){
  try {
    const data = yield call(Api.deleteRetweet, { tweet_id });
    if (yield data.code === 'error') throw Error;
    yield put(deleteRetweetApi.success(data));
  } catch (err) {
    yield put(deleteRetweetApi.failure(err));
  }
}

function* watchDeleteRetweetApiSaga() {
  while (true) {
    const { tweet_id } = yield take(types.DELETE_RETWEET['REQUEST']);
    yield fork(deleteRetweetApiSaga, { tweet_id });
  }
}

function* postHeartApiSaga({ tweet_id }: PostHeartUseData){
  try {
    const data = yield call(Api.postHeart, { tweet_id });
    if (yield data.code === 'error') throw Error;
    yield put(postHeartApi.success(data));
  } catch (err) {
    yield put(postHeartApi.failure(err));
  }
}

function* watchPostHeartApiSaga() {
  while (true) {
    const { tweet_id } = yield take(types.POST_HEART['REQUEST']);
    yield fork(postHeartApiSaga, { tweet_id });
  }
}

function* deleteHeartApiSaga({ tweet_id }: DeleteHeartUseData){
  try {
    const data = yield call(Api.deleteHeart, { tweet_id });
    if (yield data.code === 'error') throw Error;
    yield put(deleteHeartApi.success(data));
  } catch (err) {
    yield put(deleteHeartApi.failure(err));
  }
}

function* watchDeleteHeartApiSaga() {
  while (true) {
    const { tweet_id } = yield take(types.DELETE_HEART['REQUEST']);
    yield fork(deleteHeartApiSaga, { tweet_id });
  }
}

export default function* () {
  yield all([
    fork(watchPostTweetApiSaga),
    fork(watchDeleteTweetApiSaga),
    fork(watchPostRetweetApiSaga),
    fork(watchDeleteRetweetApiSaga),
    fork(watchPostHeartApiSaga),
    fork(watchDeleteHeartApiSaga),
  ]);
}
