const initialState: ModalReducer = {
  isModal: false,
  isCreateAccount: false,
  component: '',
};

interface ModalReducer {
  isModal: boolean;
  isCreateAccount: boolean;
  component: ""|ModalComponentData;
} 

export interface ModalComponentData {
  component: JSX.Element
}
export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case 'LOGIN_ACCOUNT':
      return {
        ...state,
        isCreateAccount: false,
        isModal: true,
      }
    case 'CREATE_ACCOUNT':
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