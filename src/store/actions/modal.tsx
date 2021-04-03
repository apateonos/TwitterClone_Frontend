export interface OpenModalUseData {
  component: JSX.Element
}

export const modal = {
  open: ({ component }: OpenModalUseData) => ({
    type: 'OPEN_MODAL',
    payload: component
  }),
  close: () => ({
    type: 'CLOSE_MODAL'
  }),
  createAccount: () => ({
    type: 'CREATE_ACCOUNT'
  })
};