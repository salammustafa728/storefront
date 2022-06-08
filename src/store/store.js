import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import category  from '../reducer/categoryReducer';
// import { productsRducer } from '../reducer/productReducer'
import cart  from '../reducer/cartReducer';
import thunk from 'redux-thunk';


let reducers = combineReducers({ category, cart});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();