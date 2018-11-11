import { List } from 'immutable';
import { createSelector } from 'reselect';

export const getFoodItems = state => state.getIn(List(['foodReducer', 'items']))
export const getLocation = state => state.getIn(List(['foodReducer', 'location']))

export const getItemInfo = createSelector(
    getFoodItems,
    getLocation,
    (foodItems, location) => foodItems.get(location)
);