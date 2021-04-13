import { AxiosPromise } from 'axios';
import { get } from './service';

export const getMessageList = (): AxiosPromise => {
  return get('message');
}