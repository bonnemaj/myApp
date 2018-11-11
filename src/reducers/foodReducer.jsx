import { Map } from 'immutable';
import { LOAD_ITEM } from '../constants/ActionConstants';

const initialState = Map({
    items: Map({
        location: '',
        hamburger: Map({
            id: 104,
            price: '2.54',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        })
    })
})

export function foodReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEM:
            state = state.set('location', action.itemName)
            return state;
        default:
            return state;
    }
}

export default foodReducer;