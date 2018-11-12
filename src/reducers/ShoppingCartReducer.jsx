import { List, Map } from 'immutable'

import { ADD_ITEM_SHOPPINGCART, REMOVE_ITEM_SHOPPINGCART } from '../constants/ActionConstants';

const initialState = Map({
    contents: Map({})
})

function shoppingCartReducer (state = initialState, action) {
    switch (action.type) {

        case ADD_ITEM_SHOPPINGCART:
            if (state.get('contents').keySeq().contains(action.item))
                state = state.setIn(List(['contents', action.item]), state.getIn(List(['contents', action.item])) + action.amount);
            else
                state = state.setIn(List(['contents', action.item]), action.amount);
            return state;

        case REMOVE_ITEM_SHOPPINGCART:
            state = state.removeIn(List(['contents', action.item]));
            return state;

        default:
            return state;
    }
}

export default shoppingCartReducer;