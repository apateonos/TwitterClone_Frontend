import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/user';
import * as types from '../actions/types';
import { postLoginAccountApi, postCreateAccountApi } from '../actions/user';
import { LoginUserUseData, CreateAccountUseData } from '../../api/user';

function* postLoginAccountSaga({ email, password }: LoginUserUseData) {
  try {
    const data = yield call(Api.postLoginAccount, { email, password });
    if (yield data.code === 'errors') throw Error;
    yield put(postLoginAccountApi.success(data));
  } catch (err) {
    yield put(postLoginAccountApi.failure(err));
  }
}

function* watchPostLoginAccountSaga() {
  while (true) {
    const { email, password } = yield take(types.POST_LOGIN_ACCOUNT[types.REQUEST]);
    yield fork(postLoginAccountSaga, { email, password });
  }
}

function* postCreateAccountSaga({ email, name, password, profile }: CreateAccountUseData) {
  try {
    const data = yield call(Api.postCreateAccount, { email, name, password, profile });
    if (yield data.code === 'errors') throw Error;
    yield put(postCreateAccountApi.success(data));
  } catch (err) {
    yield put(postCreateAccountApi.failure(err));
  }
}

function* watchPostCreateAccountSaga() {
  while (true) {
    const { email, name, password, profile } = yield take(types.POST_CREATE_ACCOUNT[types.REQUEST]);
    yield fork(postCreateAccountSaga, { email, name, password, profile });
  }
}

export default function* () {
  yield all([
    fork(watchPostLoginAccountSaga),
    fork(watchPostCreateAccountSaga)
  ]);
}
