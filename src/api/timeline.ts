import { AxiosPromise } from 'axios';
import { get } from './service';

export const getUserTimeline = (): AxiosPromise => {
  return get('timeline');
};