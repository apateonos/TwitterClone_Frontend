import axios, { AxiosPromise } from 'axios';
import { get } from './service';

export const getExplore = (): AxiosPromise => {
  return get('explore');
}