export const initialState = {
    cartItemsProducts: [],
    counter:0
  };
  
  const changeCart = (state=initialState, action)=>{
    let { type, payload } = action;

    switch (type) {
      case 'ADDCART':
        let cartCount = state.counter+1;
        let cartArr=state.cartItemsProducts;
        cartArr.push(payload);

       return {cartArr,cartCount};

       case 'REMOVECART':
        let cartCounter = state.counter-1;
        let tempcartArr=state.cartItemsProducts.filter(item=>item.name !==payload.name);

       return {cartArr:tempcartArr,cartCount:cartCounter};
    
        case 'GEtCart':
          let fetchedData=payload;
          return { cart: fetchedData, cartCount: payload.length };

      default:
        return state;
    }
  }
  export default changeCart;
  // export const cartReducer = (state = initialState, action) => {
  //   const { type, payload } = action;
  
  //   switch (type) {
  //     case 'ADD_TO_CART':
  //         console.log(state.cartItemsProducts,'uuuuuuuuu');
  //       return { cartItemsProducts: [...state.cartItemsProducts, payload] };
      
  //     case 'DELETE_FROM_CART':
  //       let array=[...state.cartItemsProducts];
  //       let removedItem = payload;
        
  //        array.map((product,id) =>{
  //         console.log(array);
  //         if(product.name === removedItem.name ){
  //           let tempRemove=array.indexOf(product);
  //           console.log(product);
  //           array.splice(tempRemove,1);
  //         }
  //         return array
  //       });
  //       return {cartItemsProducts: array };
      
  //     default:
  //       return state;
  //   }
  // };