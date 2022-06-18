export const initialState = {
    cartItemsProducts: [],
    cartCount:0,
    total:0
  };
  
  const changeCart = (state=initialState, action)=>{
    let { type, payload } = action;

    switch (type) {
      case 'ADDCART':
        let cartCount = state.cartCount+1;
      //  state.total+= payload.price;
        // let avaliability 
        let cartArr=[...state.cartItemsProducts];
        cartArr.push(payload);
        // console.log({cartArr});
       return {cartItemsProducts:cartArr,cartCount,total: state.total+= parseInt(payload.price)};

       case 'REMOVECART':
        let cartCounter = state.cartCount-1;
        
        let tempcartArr=[...state.cartItemsProducts];
        // let removedItem =payload
        tempcartArr= state.cartItemsProducts.filter(item=>item !==payload);

       return {cartItemsProducts:tempcartArr,cartCount:cartCounter,total:state.total -= parseInt(payload.price)};
    
        // case 'GETCART':
          // let fetchedData=payload;
          // console.log({fetchedData});
          // return { cartItemsProducts: fetchedData, cartCount: fetchedData.length };
         
          case 'GETCART':
            // console.log("cartItemsProducts>>>>>> "+state.cartItemsProducts);
            return state;

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