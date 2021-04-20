import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';
import * as Api from '../../api/user';
import * as types from '../actions/types';
import { createUserAccountApi, loginUserAccountApi, editUserAccountApi, logoutUserAccountApi, deleteUserAccountApi, postFollowUserApi, deleteFollowUserApi } from '../actions/user';
import { LoginUserAccountUseData, CreateUserAccountUseData, EditUserAccountUseData, DeleteUserAccountUseData, FollowUseData } from '../../api/user';

function* loginUserAccountApiSaga ({ unique_name, password }: LoginUserAccountUseData) {
  try { 
    const data = yield call(Api.loginUserAccount, { unique_name, password });
    if (yield data.code === 'errors') throw Error;
    yield put(loginUserAccountApi.success(data));
    yield axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    yield   
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

function* createUserAccountApiSaga ({ unique_name, user_name, password, user_image, profile }: CreateUserAccountUseData) {
  try {
    const data = yield call(Api.createUserAccount, { unique_name, user_name, password, user_image, profile });
    if (yield data.code === 'errors') throw Error;
    yield put(createUserAccountApi.success(data));
  } catch (err) {
    yield put(createUserAccountApi.failure(err));
  }
}

function* watchCreateUserAccountApiSaga () {
  while (true) {
    const { unique_name, user_name, password, user_image, profile } = yield take(types.CREATE_USER_ACCOUNT['REQUEST']);
    yield fork(createUserAccountApiSaga, { unique_name, user_name, password, user_image, profile });
  }
}

function* editUserAccountApiSaga ({ user_name, user_image, profile }: EditUserAccountUseData) {
  try {
    const data = yield call(Api.editUserAccount, { user_name, user_image, profile });
    if (yield data.code === 'errors') throw Error;
    yield put(editUserAccountApi.success(data));
  } catch (err) {
    yield put(editUserAccountApi.failure(err));
  }
}

function* watchEditUserAccountApiSaga () {
  while (true) {
    const { user_name, user_image, profile } = yield take(types.EDIT_USER_ACCOUNT['REQUEST']);
    yield fork(editUserAccountApiSaga, { user_name, user_image, profile });
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

function* postFollowUserApiSaga ({ follower_id }: FollowUseData) {
  try {
    const data = yield call(Api.postFollowUser, { follower_id });
    if (yield data.code === 'errors') throw Error;
    yield put(postFollowUserApi.success(data));
  } catch (err) {
    yield put(postFollowUserApi.failure(err));
  }
}

function* watchPostFollowUserApiSaga () {
  while (true) {
    const { follower_id } = yield take(types.POST_FOLLOW_USER['REQUEST']);
    yield fork(postFollowUserApiSaga, { follower_id });
  }
}

function* deleteFollowUserApiSaga ({ follower_id }: FollowUseData) {
  try {
    const data = yield call(Api.deleteFollowUser, { follower_id });
    if (yield data.code === 'errors') throw Error;
    yield put(deleteFollowUserApi.success(data));
  } catch (err) {
    yield put(deleteFollowUserApi.failure(err));
  }
}

function* watchDeleteFollowUserApiSaga () {
  while (true) {
    const { follower_id } = yield take(types.DELETE_FOLLOW_USER['REQUEST']);
    yield fork(deleteFollowUserApiSaga, { follower_id });
  }
}

export default function* () {
  yield all([
    fork(watchLoginUserAccountApiSaga),
    fork(watchCreateUserAccountApiSaga),
    fork(watchEditUserAccountApiSaga),
    fork(watchLogoutUserAccountApiSaga),
    fork(watchDeleteUserAccountApiSaga),
    fork(watchPostFollowUserApiSaga),
    fork(watchDeleteFollowUserApiSaga),
  ]);
}