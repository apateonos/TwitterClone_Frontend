const initialState = {
  isModal: false,
  isCreateAccount: false,
  component: ''
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case 'CREATE_ACCOUNT':
      console.log('heee??????????//')
      return {
        ...state,
        isModal: true,
        isCreateAccount: true,
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        isModal: true,
        component: payload
      }    
    case 'CLOSE_MODAL':
      if (state.component === '' && state.isCreateAccount === true) {
        return {
          ...state,
          isModal: false,
        }
      }
      if (state.isCreateAccount === true) {
        return {
          ...state,
          isCreateAccount: false,
        }
      }
      return {
        ...state,
        isModal: false
      }
    default:
      return { ...state };
  }
}