import { ADD_ITEM_SHOPPINGCART, REMOVE_ITEM_SHOPPINGCART } from '../constants/ActionConstants';

export const addItemToShoppingCart = (item, amount) => dispatch => {
    dispatch({
        type: ADD_ITEM_SHOPPINGCART,
        item,
        amount
    });
}

export const removeItemFromCart = item => dispatch => {
    dispatch({
        type: REMOVE_ITEM_SHOPPINGCART,
        item
    });
}