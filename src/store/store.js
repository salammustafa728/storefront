import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoryReducer } from '../reducer/categoryReducer';
import { productsRducer } from '../reducer/productReducer'
import { cartReducer } from '../reducer/cartReducer';

let reducers = combineReducers({ category: categoryReducer, products: productsRducer, cart: cartReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();