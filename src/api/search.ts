import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetSearchByKeywordUseData {
  keyword: string;
};
export const getSearchByKeyword = (data: GetSearchByKeywordUseData): AxiosPromise => {
  return get('search', data)
};