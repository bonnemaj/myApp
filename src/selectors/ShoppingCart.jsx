import { List } from 'immutable';

export const getContents = state => state.getIn(List(['shoppingCartReducer', 'contents']))