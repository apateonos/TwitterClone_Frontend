import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/profile';
import * as types from '../actions/types';
import { getUserProfileApi, getMoreUserTweetApi } from '../actions/profile';
import { GetUserProfileUseData, GetMoreUserTweetUseData } from '../../api/profile';

function* getUserProfileApiSaga({ userUniqueName }: GetUserProfileUseData) {
  try {
    const data = yield call(Api.getUserProfile, { userUniqueName });
    if (yield data.code === 'errors') throw Error;
    yield put(getUserProfileApi.success(data));
  } catch (err) {
    yield put(getUserProfileApi.failure(err));
  }
}

function* watchGetUserProfileApiSaga() {
  while (true) {
    const { userUniqueName } = yield take(types.GET_USER_PROFILE['REQUEST']);
    yield fork(getUserProfileApiSaga, { userUniqueName });
  }
}

function* getMoreUserTweetApiSaga({ userUniqueName, pickupCount }: GetMoreUserTweetUseData) {
  try {
    const data = yield call(Api.getMoreUserTweet, { userUniqueName, pickupCount });
    if (yield data.code === 'errors') throw Error;
    yield put(getMoreUserTweetApi.success(data));
  } catch (err) {
    yield put(getMoreUserTweetApi.failure(err));
  }
}

function* watchGetMoreUserTweetApiSaga() {
  while (true) {
    const { userUniqueName, pickupCount } = yield take(types.GET_MORE_USER_TWEET['REQUEST']);
    yield fork(getMoreUserTweetApiSaga, { userUniqueName, pickupCount });
  }
}


export default function* () {
  yield all([
    fork(watchGetUserProfileApiSaga),
    fork(watchGetMoreUserTweetApiSaga)
  ])
}