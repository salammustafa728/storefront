import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoryReducer } from '../reducer/categoryReducer';
import { productsRducer } from '../reducer/productReducer'


let reducers = combineReducers({ category: categoryReducer, product: productsRducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();