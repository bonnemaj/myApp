import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';
// import { PersistentState } from './localStorage';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (): Store<{}> => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
};
