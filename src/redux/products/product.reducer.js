import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR
} from "./product.types";

const INITITAL_STATE = {
    products: [],
    loading: false,
    error: null
}

const productReducer = (state = INITITAL_STATE, action) => {

    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            }
        }
        case FETCH_PRODUCTS_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.error,
                products: []
            }
        }

        default:
            return state;
    }


}

export default productReducer;
