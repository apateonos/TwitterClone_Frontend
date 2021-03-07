import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/user';
import * as types from '../actions/types';
import { createUserAccountApi, loginUserAccountApi } from '../actions/user';
import { LoginUserUseData, CreateAccountUseData } from '../../api/user';

function* postLoginAccountSaga({ email, password }: LoginUserUseData) {
  try {
    const data = yield call(Api.postLoginAccount, { email, password });
    if (yield data.code === 'errors') throw Error;
    yield put(loginUserAccountApi.success(data));
  } catch (err) {
    yield put(loginUserAccountApi.failure(err));
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
    yield put(createUserAccountApi.success(data));
  } catch (err) {
    yield put(createUserAccountApi.failure(err));
  }
}

function* watchPostCreateAccountSaga() {
  while (true) {
    const { email, name, password, profile } = yield take(types.CREATE_USER_ACCOUNT[types.REQUEST]);
    yield fork(postCreateAccountSaga, { email, name, password, profile });
  }
}

export default function* () {
  yield all([
    fork(watchPostLoginAccountSaga),
    fork(watchPostCreateAccountSaga)
  ]);
}
