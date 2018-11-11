import { List } from 'immutable';

export const foodItems = state => state.getIn(List(['foodReducer', 'items']))