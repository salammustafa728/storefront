import superagent from 'superagent';

const apiURL = 'https://fakestoreapi.com/products';

export const getAction = payload => {
  return {
      type: 'GET',
      payload: payload
  }
}

export const flowers = (data) => {
  return {
    type: 'Flowers',
    payload: data
  }
}

export const food = (data) => {
  return {
    type: 'FOOD',
    payload: data
  }
}

export const getRemoteData = () => 
(dispatch,state)=>{
  return superagent.get(apiURL)
      .then(response => {
        dispatch(getAction(response.body))
      }).catch(err => console.log(err.message))
}

export const getflowers = () => 
(dispatch,state)=>{
  return superagent.get(apiURL)
  .then(response => {
    dispatch(flowers(response.body))
  }).catch(err => console.log(err.message))
}
export const getFood = () => 
(dispatch,state)=>{
  return superagent.get(apiURL)
  .then(response => {
    dispatch(food(response.body))
  }).catch(err => console.log(err.message))
}
// export const getCartData = () => 
// (dispatch,state)=>{
//   return superagent.get(apiCart)
//     .then(response => {
//       dispatch(getCart(response.body))
//     }).catch(err => console.log(err.message))
//   }



export function selectCategory(categoryNmae) {
    return{
        type:"SELECT_CATEGORY",
        payload: categoryNmae
    };
}

export function filterProducts(categoryNmae,products) {
    return{
        type: 'FILTER_PRODUCTS',
        payload:{categoryNmae,products},
    };
}

export function addToCart(productName) {
    return {
      type: 'ADD_TO_CART',
      payload: productName,
    };
  }
  
export function deleteFromCart(productName) {
    return {
      type: 'DELETE_FROM_CART',
      payload: productName,
    };
  }

  // export const decrementInventory = (id) => {
  //   return {
  //     type: 'DECREMENT_INVENTORY',
  //     payload: id,
  //   };
  // };
  
 