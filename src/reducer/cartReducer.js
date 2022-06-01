export const initialState = {
    cartItemsProducts: [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'ADD_TO_CART':
          console.log(state.cartItemsProducts,'uuuuuuuuu');
        return { cartItemsProducts: [...state.cartItemsProducts, payload] };
      case 'DELETE_FROM_CART':
        const cartItemsProducts = state.cartItemsProducts.filter((product) => product !== payload);
  
        return { cartItemsProducts };
  
      default:
        return state;
    }
  };