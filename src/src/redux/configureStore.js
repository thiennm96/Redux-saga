// import { createStore, compose, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/index';

// const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object'
// && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//   shouldHotReload: false,
// }) : compose;

// const configureStore = () => {
//   const middlewares = [];
//   const enhancers = [applyMiddleware(...middlewares)];
//   const store = createStore(rootReducer, composeEnhancers(...enhancers));
//   return store;
// };

// export default configureStore;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [thunk, sagaMiddleware];
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
      // other store enhancers if any
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
