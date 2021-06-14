import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "./product.types";





export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => (
    {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    });

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_ERROR,
    payload: { error }
});

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsBegin());
        return fetch("http://localhost:3200/api/products")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchProductsSuccess(json.products));
                return json.products;
            })
            .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}