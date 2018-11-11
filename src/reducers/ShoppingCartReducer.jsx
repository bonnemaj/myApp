import { Map } from 'immutable'

const initialState = Map({
    contents: Map({})
})

function ShoppingCartReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default ShoppingCartReducer;