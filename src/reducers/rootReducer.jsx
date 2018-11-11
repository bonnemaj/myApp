import { combineReducers } from 'redux-immutable';

import shoppingCartReducer from './shoppingCartReducer';
import foodReducer from './foodReducer';

export const rootReducer = combineReducers({
    shoppingCartReducer,
    foodReducer
})