import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/user';
import * as types from '../actions/types';
import axios from 'axios';
import { createUserAccountApi, loginUserAccountApi, changeUserNameApi, deleteUserAccountApi } from '../actions/user';
import { LoginUserUseData, CreateAccountUseData, ChangeUserNameUseData, DeleteUserAccountUseData } from '../../api/user';

function* loginUserAccountApiSaga({ email, password }: LoginUserUseData) {
  try {
    const data = yield call(Api.loginUserAccount, { email, password });
    if (yield data.code === 'errors') throw Error;
    yield put(loginUserAccountApi.success(data));
    yield axios.defaults.headers.common['Authorization'] = `Bearer ${data}`;
  } catch (err) {
    yield put(loginUserAccountApi.failure(err));
  }
}

function* watchLoginUserAccountApiSaga() {
  while (true) {
    const { email, password } = yield take(types.POST_LOGIN_ACCOUNT[types.REQUEST]);
    yield fork(loginUserAccountApiSaga, { email, password });
  }
}

function* createUserAccountApiSaga({ email, name, password, profile }: CreateAccountUseData) {
  try {
    const data = yield call(Api.createUserAccount, { email, name, password, profile });
    if (yield data.code === 'errors') throw Error;
    yield put(createUserAccountApi.success(data));
  } catch (err) {
    yield put(createUserAccountApi.failure(err));
  }
}

function* watchCreateUserAccountApiSaga() {
  while (true) {
    const { email, name, password, profile } = yield take(types.CREATE_USER_ACCOUNT[types.REQUEST]);
    yield fork(createUserAccountApiSaga, { email, name, password, profile });
  }
}

function* chageUserNameApiSaga({ name }: ChangeUserNameUseData) {
  try {
    const data = yield call(Api.changeUserName, { name });
    if (yield data.code === 'errors') throw Error;
    yield put(changeUserNameApi.success(data));
  } catch (err) {
    yield put(changeUserNameApi.failure(err));
  }
}

function* watchchageUserNameApiSaga() {
  while (true) {
    const { name } = yield take(types.CHANGE_USER_NAME[types.REQUEST]);
    yield fork(chageUserNameApiSaga, { name });
  }
}

function* deleteUserAccountApiSaga({ password }: DeleteUserAccountUseData) {
  try {
    const data = yield call(Api.deleteUserAccount, { password });
    if (yield data.code === 'errors') throw Error;
    yield put(deleteUserAccountApi.success(data));
  } catch (err) {
    yield put(deleteUserAccountApi.failure(err));
  }
}

function* watchDeleteUserAccountApiSaga() {
  while (true) {
    const { password } = yield take(types.DELETE_USER_ACCOUNT[types.REQUEST]);
    yield fork(deleteUserAccountApiSaga, { password });
  }
}

export default function* () {
  yield all([
    fork(watchLoginUserAccountApiSaga),
    fork(watchCreateUserAccountApiSaga),
    fork(watchchageUserNameApiSaga),
    fork(watchDeleteUserAccountApiSaga)
  ]);
}
