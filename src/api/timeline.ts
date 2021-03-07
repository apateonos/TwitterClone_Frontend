import { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetUserTimelineUseData {
  id: number;
}

export const getUserTimeLine = ({ id }: GetUserTimelineUseData): AxiosPromise => {
  return get('/timeline', { id });
};