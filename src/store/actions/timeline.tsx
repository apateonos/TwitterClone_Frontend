import { GetUserTimelineUseData } from '../../api/timeline';
import { GET_USER_TIMELINE } from './types';

export const getUserTimelineApi = {
  request: ({ id }: GetUserTimelineUseData) => ({
    type: GET_USER_TIMELINE['REQUEST'],
  }),
  success: (res: any) => ({
    type: GET_USER_TIMELINE['SUCCESS'],
    timeline: res,
  }),
  failure: (err: Error) => ({
    type: GET_USER_TIMELINE['FAILURE'],
    err: err.message,
  }),
};

