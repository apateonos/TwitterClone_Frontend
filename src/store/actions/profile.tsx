import { GetUserProfileUseData } from '../../api/profile';
import { GET_USER_PROFILE } from '../actions/types';

export const getUserProfileApi = {
  request: ({ userUniqueName }: GetUserProfileUseData) => ({
    type: GET_USER_PROFILE['REQUEST'],
    userUniqueName
  }),
  success: (res: any) => ({
    type: GET_USER_PROFILE['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: GET_USER_PROFILE['FAILURE'],
    payload: err
  })
}