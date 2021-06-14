import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
//import productReducer from '../redux/products/product.reducer'
import products from '../redux/products/product.reducer'

export default combineReducers({
    cartReducer,
    //    productReducer
    products
});
