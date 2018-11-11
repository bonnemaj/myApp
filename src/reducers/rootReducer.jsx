import { combineReducers } from 'redux-immutable';

import ShoppingCartReducer from './shoppingCartReducer';
import foodReducer from './foodReducer';

export const rootReducer = combineReducers({
    ShoppingCartReducer,
    foodReducer
})