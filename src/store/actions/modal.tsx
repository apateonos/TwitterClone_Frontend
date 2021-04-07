import { ModalComponentData } from '../reducers/modal';

export const modal = {
  open: ({ component }: ModalComponentData) => ({
    type: 'OPEN_MODAL',
    payload: component
  }),
  close: () => ({
    type: 'CLOSE_MODAL'
  }),
  loginAccount: () => ({
    type: 'LOGIN_ACCOUNT'
  }),
  createAccount: () => ({
    type: 'CREATE_ACCOUNT'
  })
};