import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export const getTimeLine = (): AxiosPromise => {
  return get('/sign-up');
};