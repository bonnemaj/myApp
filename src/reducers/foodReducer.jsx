import { Map } from 'immutable';
import { LOAD_ITEM } from '../constants/ActionConstants';

const initialState = Map({
    location: '',
    items: Map({
        hamburger: Map({
            id: 104,
            title: 'hamburger',
            price: 2.54,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }),
        bier: Map({
            id: 145,
            title: 'bier',
            price: 3.00,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }),
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