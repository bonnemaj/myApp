import { LOAD_ITEM } from '../constants/ActionConstants';

export const loadItem = itemName => dispatch => {
    dispatch({
        type: LOAD_ITEM,
        itemName
    })
}