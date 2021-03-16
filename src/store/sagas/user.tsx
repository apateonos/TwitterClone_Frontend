import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';
import * as Api from '../../api/user';
import * as types from '../actions/types';
import { checkUserAccountApi, createUserAccountApi, loginUserAccountApi, changeUserNameApi, deleteUserAccountApi, getUserInfoApi } from '../actions/user';
import { LoginUserAccountUseData, CreateUserAccountUseData, ChangeUserNameUseData, DeleteUserAccountUseData, GetUserInfoUseData } from '../../api/user';

function* getUserInfoApiSaga({ userUniqueName }:GetUserInfoUseData) {
  try {
    const data = yield call(Api.getUserInfo, { userUniqueName });
    if (yield data.code === 'errors') throw Error;
    yield put(getUserInfoApi.success(data));
  } catch (err) {
    yield put(getUserInfoApi.failure(err));
  }
}

function* watchGetUserInfoApiSaga() {
  while (true) {
    const { userUniqueName } = yield take(types.GET_USER_INFO[types.REQUEST]);
    yield fork(getUserInfoApiSaga, { userUniqueName });
  }
}

function* checkUserAccountApiSaga() {
  try {
    const data = yield call(Api.checkUserAccount);
    if (yield data.code === 'errors') throw Error;
    yield put(checkUserAccountApi.success(data));
    yield axios.defaults.headers.common['Authorization'] = `Bearer ${data.res.token}`;
  } catch (err) {
    yield put(checkUserAccountApi.failure(err));
  }
}

function* watchCheckUserAccountApiSaga() {
  while (true) {
    yield take(types.CHECK_USER_ACCOUNT[types.REQUEST]);
    yield fork(checkUserAccountApiSaga);
  }
}

function* loginUserAccountApiSaga({ userUniqueName, password }: LoginUserAccountUseData) {
  try {
    const data = yield call(Api.loginUserAccount, { userUniqueName, password });
    if (yield data.code === 'errors') throw Error;
    yield put(loginUserAccountApi.success(data));
    yield axios.defaults.headers.common['Authorization'] = `Bearer ${data.res.token}`;
  } catch (err) {
    yield put(loginUserAccountApi.failure(err));
  }                                                                 
}

function* watchLoginUserAccountApiSaga() {
  while (true) {
    const { userUniqueName, password } = yield take(types.LOGIN_USER_ACCOUNT[types.REQUEST]);
    yield fork(loginUserAccountApiSaga, { userUniqueName, password });
  }
}

function* createUserAccountApiSaga({ userUniqueName, userName, password, profile }: CreateUserAccountUseData) {
  try {
    const data = yield call(Api.createUserAccount, { userUniqueName, userName, password, profile });
    if (yield data.code === 'errors') throw Error;
    yield put(createUserAccountApi.success(data));
  } catch (err) {
    yield put(createUserAccountApi.failure(err));
  }
}

function* watchCreateUserAccountApiSaga() {
  while (true) {
    const { userUniqueName, userName, password, profile } = yield take(types.CREATE_USER_ACCOUNT[types.REQUEST]);
    yield fork(createUserAccountApiSaga, { userUniqueName, userName, password, profile });
  }
}

function* chageUserNameApiSaga({ userName }: ChangeUserNameUseData) {
  try {
    const data = yield call(Api.changeUserName, { userName });
    if (yield data.code === 'errors') throw Error;
    yield put(changeUserNameApi.success(data));
  } catch (err) {
    yield put(changeUserNameApi.failure(err));
  }
}

function* watchchageUserNameApiSaga() {
  while (true) {
    const { userName } = yield take(types.CHANGE_USER_NAME[types.REQUEST]);
    yield fork(chageUserNameApiSaga, { userName });
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
    fork(watchGetUserInfoApiSaga),
    fork(watchCheckUserAccountApiSaga),
    fork(watchLoginUserAccountApiSaga),
    fork(watchCreateUserAccountApiSaga),
    fork(watchchageUserNameApiSaga),
    fork(watchDeleteUserAccountApiSaga)
  ]);
}
