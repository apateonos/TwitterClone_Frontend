import { AxiosPromise } from 'axios';
import { get } from './service';

export interface GetUserTimelineUseData {
  pickupCount: number;
}
export const getUserTimeline = ({ 
  pickupCount 
}: GetUserTimelineUseData): AxiosPromise => {
  return get('timeline', { pickupCount });
};