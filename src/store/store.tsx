import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../store/reducers/index';
import rootSaga from './sagas/index';
// import logger from 'redux-logger';
//import saga from './sagas/ping';
function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, enhancers);
  
  rootSaga.map(sagaMiddleware.run);
  return store;
}

const rootStore = configureStore();

export default rootStore;
