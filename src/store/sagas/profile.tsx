import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/profile';
import * as types from '../actions/types';
import { getUserProfileApi } from '../actions/profile';
import { GetUserProfileUseData } from '../../api/profile';

function* getUserProfileApiSaga({ unique_name }: GetUserProfileUseData) {
  try {
    const data = yield call(Api.getUserProfile, { unique_name });
    if (yield data.code === 'errors') throw Error;
    yield put(getUserProfileApi.success(data));
  } catch (err) {
    yield put(getUserProfileApi.failure(err));
  }
}

function* watchGetUserProfileApiSaga() {
  while (true) {
    const { unique_name } = yield take(types.GET_USER_PROFILE['REQUEST']);
    yield fork(getUserProfileApiSaga, { unique_name });
  }
}

export default function* () {
  yield all([
    fork(watchGetUserProfileApiSaga)
  ])
}