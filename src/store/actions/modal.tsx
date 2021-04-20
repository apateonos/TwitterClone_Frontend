export const modal = {
  open: ( component: JSX.Element ) => ({
    type: 'OPEN_MODAL',
    payload: component
  }),
  close: () => ({
    type: 'CLOSE_MODAL'
  })
};