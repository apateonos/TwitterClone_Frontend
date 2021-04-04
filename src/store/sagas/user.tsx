import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';
import * as Api from '../../api/user';
import * as types from '../actions/types';
import { createUserAccountApi, loginUserAccountApi, changeUserNameApi, deleteUserAccountApi } from '../actions/user';
import { LoginUserAccountUseData, CreateUserAccountUseData, ChangeUserNameUseData, DeleteUserAccountUseData } from '../../api/user';

function* loginUserAccountApiSaga({ userUniqueName, password }: LoginUserAccountUseData) {
  try { 
    const data = yield call(Api.loginUserAccount, { userUniqueName, password });
    if (yield data.code === 'errors') throw Error;
    yield put(loginUserAccountApi.success(data));
    yield axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    yield put({type: 'CLOSE_MODAL'});
    //yield window.sessionStorage.setIem("refresh", data.refresh); // https 설정이후 쿠키로 변경후 httpOnly 속성부여예정
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

function* createUserAccountApiSaga({ userUniqueName, userName, password, imageFile, profile }: CreateUserAccountUseData) {
  try {
    const data = yield call(Api.createUserAccount, { userUniqueName, userName, password, imageFile, profile });
    if (yield data.code === 'errors') throw Error;
    yield put(createUserAccountApi.success(data));
  } catch (err) {
    yield put(createUserAccountApi.failure(err));
  }
}

function* watchCreateUserAccountApiSaga() {
  while (true) {
    const { userUniqueName, userName, password, imageFile, profile } = yield take(types.CREATE_USER_ACCOUNT[types.REQUEST]);
    yield fork(createUserAccountApiSaga, { userUniqueName, userName, password, imageFile, profile });
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
    const { userName } = yield take(types.CHANGE_USER_INFORMATION[types.REQUEST]);
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
    fork(watchLoginUserAccountApiSaga),
    fork(watchCreateUserAccountApiSaga),
    fork(watchchageUserNameApiSaga),
    fork(watchDeleteUserAccountApiSaga)
  ]);
}