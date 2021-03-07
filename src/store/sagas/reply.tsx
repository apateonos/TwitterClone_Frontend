import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/reply';
import * as types from '../actions/types';
import { getThisTweetReplyListApi, postThisTweetReplyApi, updateThisTweetReplyApi, deleteThisTweetReplyApi } from '../actions/reply';
import { GetThisTweetReplyListUseData, PostThisTweetReplyUseData, UpdateThisTweetReplyUseData, DeleteThisTweetReplyUseData } from '../../api/reply';

function* getThisTweetReplyListApiSaga({ tweet_id }: GetThisTweetReplyListUseData) {
  try {
    const data = yield call(Api.getThisTweetReplyList, { tweet_id });
    if (yield data.code === 'errors') throw Error;
    yield put(getThisTweetReplyListApi.success(data));
  } catch (err) {
    yield put(getThisTweetReplyListApi.failure(err));
  }
}

function* watchGetThisTweetReplyListApiSaga() {
  while (true) {
    const { tweet_id } = yield take(types.GET_THIS_TWEET_REPLY_LIST[types.REQUEST]);
    yield fork(getThisTweetReplyListApiSaga, { tweet_id });
  }
}

function* postThisTweetReplyApiSaga({ tweet_id, reply }: PostThisTweetReplyUseData) {
  try {
    const data = yield call(Api.PostThisTweetReply, { tweet_id, reply });
    if (yield data.code === 'errors') throw Error;
    yield put(postThisTweetReplyApi.success(data));
  } catch (err) {
    yield put(postThisTweetReplyApi.failure(err));
  }
}

function* watchPostThisTweetReplyApiSaga() {
  while (true) {
    const { tweet_id, reply } = yield take(types.POST_THIS_TWEET_REPLY[types.REQUEST]);
    yield fork(postThisTweetReplyApiSaga, { tweet_id, reply });
  }
}

function* updateThisTweetReplyApiSaga({ tweet_id, reply_id, reply }: UpdateThisTweetReplyUseData) {
  try {
    const data = yield call(Api.updateThisTweetReply, { tweet_id, reply_id, reply });
    if (yield data.code === 'errors') throw Error;
    yield put(updateThisTweetReplyApi.success(data));
  } catch (err) {
    yield put(updateThisTweetReplyApi.failure(err));
  }
}

function* watchUpdateThisTweetReplyApiSaga() {
  while (true) {
    const { tweet_id, reply_id, reply } = yield take(types.UPDATE_THIS_TWEET_REPLY[types.REQUEST]);
    yield fork(updateThisTweetReplyApiSaga, { tweet_id, reply_id, reply });
  }
}

function* deleteThisTweetReplyApiSage({ tweet_id, reply_id }: DeleteThisTweetReplyUseData) {
  try {
    const data = yield call(Api.deleteThisTweetReply, { tweet_id, reply_id });
    if (yield data.code === 'errors') throw Error;
    yield put(deleteThisTweetReplyApi.success(data));
  } catch (err) {
    yield put(deleteThisTweetReplyApi.failure(err));
  }
}

function* watchDeleteThisTweetReplyApiSage() {
  while (true) {
    const { tweet_id, reply_id } = yield take(types.UPDATE_THIS_TWEET_REPLY[types.REQUEST]);
    yield fork(deleteThisTweetReplyApiSage, { tweet_id, reply_id });
  }
}

export default function* () {
  yield all([
    fork(watchGetThisTweetReplyListApiSaga),
    fork(watchPostThisTweetReplyApiSaga),
    fork(watchUpdateThisTweetReplyApiSaga),
    fork(watchDeleteThisTweetReplyApiSage)
  ]);
}