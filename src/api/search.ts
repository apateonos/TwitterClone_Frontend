import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetSearchByKeywordUseData {
  keyword: string;
};
export const getSearchByKeyword = ({ keyword }: GetSearchByKeywordUseData): AxiosPromise => {
  return get('search', { keyword })
};