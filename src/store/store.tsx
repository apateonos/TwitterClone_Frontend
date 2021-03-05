import { createStore} from 'redux';
import rootReducer from './reducers/root';


function configureStore() {
  const store = createStore(rootReducer);

  return store;
}

const rootStore = configureStore();

export default rootStore;