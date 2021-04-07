import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/search';
import * as types from '../actions/types';
import { getSearchByKeywordApi } from '../actions/search';
import { GetSearchByKeywordUseData } from '../../api/search';

function* getSearchByKeywordApiSaga({ keyword }: GetSearchByKeywordUseData) {
  try {
    const data = yield call(Api.getSearchByKeyword, { keyword });
    if (yield data.code === 'errors') throw Error;
    yield put(getSearchByKeywordApi.success(data));
  } catch (err) {
    yield put(getSearchByKeywordApi.failure(err));
  }
}

function* watchGetSearchByKeywordApiSaga() {
  while (true) {
    const { keyword } = yield take(types.GET_SEARCH_BY_KEYWORD['REQUEST']);
    yield fork(getSearchByKeywordApiSaga, { keyword });
  }
}

export default function* () {
  yield all([
    fork(watchGetSearchByKeywordApiSaga)
  ])
}