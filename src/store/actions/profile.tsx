import { GetUserProfileUseData, GetMoreUserTweetUseData } from '../../api/profile';
import { GET_USER_PROFILE, GET_MORE_USER_TWEET } from '../actions/types';

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

export const getMoreUserTweetApi = {
  request: ({ userUniqueName }: GetMoreUserTweetUseData) => ({
    type: GET_MORE_USER_TWEET['REQUEST'],
    userUniqueName
  }),
  success: (res: any) => ({
    type: GET_MORE_USER_TWEET['SUCCESS'],
    payload: res,
  }),
  failure: (err: Error) => ({
    type: GET_MORE_USER_TWEET['FAILURE'],
    payload: err
  })
}