import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    cart: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AddItem':
            return ({
                ...state,
                cart: addItemToCart(state.cart, action.payload)  // [...state.cart, action.payload]
            })
        default:
            return state;
    }
}

export default cartReducer;
