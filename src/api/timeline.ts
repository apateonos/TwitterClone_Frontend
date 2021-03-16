import { AxiosPromise } from 'axios';
import { get } from './service';

export const getUserTimeLine = (): AxiosPromise => {
  return get('/timeline', {});
};