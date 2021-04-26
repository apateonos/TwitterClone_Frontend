const initialState: ModalReducer = {
  isModal: false,
  component: '',
};

interface ModalReducer {
  isModal: boolean;
  component: ''|JSX.Element;
} 

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isModal: true,
        component: payload
      }    

    case 'CLOSE_MODAL':
      return {
        ...state,
        isModal: false
      }

    default:
      return { ...state };
  }
}