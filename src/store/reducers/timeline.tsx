import { GET_USER_TIMELINE } from '../actions/types';

const initialState = {
  timeline: [],
  payload: []
}

export default function (state=initialState, { type, payload }: any) {
  switch (type) {
    case GET_USER_TIMELINE['REQUEST']:
      return { ...state }
    case GET_USER_TIMELINE['SUCCESS']:
      return {
        ...state,
        timeline: payload
      }
    case GET_USER_TIMELINE['FAILURE']:
      return {
        ...state,
        error: payload
      }
    default:
      return { ...state };
  }
}