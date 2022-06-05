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
        let array=[...state.cartItemsProducts];
        let removedItem = payload;
        
         array.map((product,id) =>{
          console.log(array);
          if(product.name === removedItem.name ){
            let tempRemove=array.indexOf(product);
            console.log(product);
            array.splice(tempRemove,1);
          }
          return array
        });
        return {cartItemsProducts: array };
      
      default:
        return state;
    }
  };