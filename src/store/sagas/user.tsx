import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';
import * as Api from '../../api/user';
import * as types from '../actions/types';
import { getTokenFromRefreshApi, createUserAccountApi, loginUserAccountApi, editUserAccountApi, logoutUserAccountApi, deleteUserAccountApi } from '../actions/user';
import { LoginUserAccountUseData, CreateUserAccountUseData, EditUserAccountUseData, DeleteUserAccountUseData } from '../../api/user';
import { modal } from '../actions/modal';

function* getTokenFromRefreshApiSaga () {
  try { 
    const data = yield call(Api.getTokenFromRefresh);
    if (yield data.code === 'errors') throw Error;
    yield put(getTokenFromRefreshApi.success(data));
    yield axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
  } catch (err) {
    yield put(getTokenFromRefreshApi.failure(err));
  }                                                                 
}

function* watchGetTokenFromRefreshApiSaga () {
  while (true) {
    yield take(types.GET_TOKEN_FROM_REFRESH['REQUEST']);
    yield fork(getTokenFromRefreshApiSaga);
  }
}

function* loginUserAccountApiSaga ({ unique_name, password }: LoginUserAccountUseData) {
  try { 
    const data = yield call(Api.loginUserAccount, { unique_name, password });
    if (yield data.code === 'errors') throw Error;
    yield put(loginUserAccountApi.success(data));
    yield axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    yield put({type: 'CONNECTION_SOCKET', token: `Bearer ${data.token}`});
    yield put(modal.close());
  } catch (err) {
    yield put(loginUserAccountApi.failure(err));
  }                                                                 
}

function* watchLoginUserAccountApiSaga () {
  while (true) {
    const { unique_name, password } = yield take(types.LOGIN_USER_ACCOUNT['REQUEST']);
    yield fork(loginUserAccountApiSaga, { unique_name, password });
  }
}

function* createUserAccountApiSaga ({ unique_name, user_name, password, imageFile, profile }: CreateUserAccountUseData) {
  try {
    const data = yield call(Api.createUserAccount, { unique_name, user_name, password, imageFile, profile });
    if (yield data.code === 'errors') throw Error;
    yield axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    yield put(createUserAccountApi.success(data));
    yield put(modal.close());
  } catch (err) {
    yield put(createUserAccountApi.failure(err));
  }
}

function* watchCreateUserAccountApiSaga () {
  while (true) {
    const { unique_name, user_name, password, imageFile, profile } = yield take(types.CREATE_USER_ACCOUNT['REQUEST']);
    yield fork(createUserAccountApiSaga, { unique_name, user_name, password, imageFile, profile });
  }
}

function* editUserAccountApiSaga ({ user_name, imageFile, profile }: EditUserAccountUseData) {
  try {
    const data = yield call(Api.editUserAccount, { user_name, imageFile, profile });
    if (yield data.code === 'errors') throw Error;
    yield put(editUserAccountApi.success(data));
  } catch (err) {
    yield put(editUserAccountApi.failure(err));
  }
}

function* watchEditUserAccountApiSaga () {
  while (true) {
    const { user_name, imageFile, profile } = yield take(types.EDIT_USER_ACCOUNT['REQUEST']);
    yield fork(editUserAccountApiSaga, { user_name, imageFile, profile });
  }
}

function* logoutUserAccountApiSaga () {
  try {
    const data = yield call(Api.logoutUserAccount);
    if (yield data.code === 'errors') throw Error;
    yield put(logoutUserAccountApi.success(data));
  } catch (err) {
    yield put(logoutUserAccountApi.failure(err));
  }
}

function* watchLogoutUserAccountApiSaga () {
  while (true) {
    yield take(types.DELETE_USER_ACCOUNT['REQUEST']);
    yield fork(logoutUserAccountApiSaga);
  }
}

function* deleteUserAccountApiSaga ({ password }: DeleteUserAccountUseData) {
  try {
    const data = yield call(Api.deleteUserAccount, { password });
    if (yield data.code === 'errors') throw Error;
    yield put(deleteUserAccountApi.success(data));
  } catch (err) {
    yield put(deleteUserAccountApi.failure(err));
  }
}

function* watchDeleteUserAccountApiSaga () {
  while (true) {
    const { password } = yield take(types.DELETE_USER_ACCOUNT['REQUEST']);
    yield fork(deleteUserAccountApiSaga, { password });
  }
}

export default function* () {
  yield all([
    fork(watchGetTokenFromRefreshApiSaga),
    fork(watchLoginUserAccountApiSaga),
    fork(watchCreateUserAccountApiSaga),
    fork(watchEditUserAccountApiSaga),
    fork(watchLogoutUserAccountApiSaga),
    fork(watchDeleteUserAccountApiSaga),
  ])
}