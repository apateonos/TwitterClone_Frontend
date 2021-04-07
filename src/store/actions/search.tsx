import { GET_SEARCH_BY_KEYWORD } from './types';
import { GetSearchByKeywordUseData } from '../../api/search';

export const getSearchByKeywordApi = {
  request: ({ keyword }: GetSearchByKeywordUseData) => ({
    type: GET_SEARCH_BY_KEYWORD['REQUEST'],
    keyword
  }),
  success: (res: any) => ({
    type: GET_SEARCH_BY_KEYWORD['SUCCESS'],
    payload: res
  }),
  failure: (err: Error) => ({
    type: GET_SEARCH_BY_KEYWORD['FAILURE'],
    payload: err
  })
}