import superagent from 'superagent';

const apiURL = 'https://app-auth-obieda.herokuapp.com/api/v1/products';

export const getAction = payload => {
  return {
      type: 'GET',
      payload: payload
  }
}

export const getElectronic = (data) => {
  return {
    type: 'Electronics',
    payload: data
  }
}

export const getFoodd = (data) => {
  return {
    type: 'Food',
    payload: data
  }
}

export const getRemoteData = () => 
(dispatch,state)=>{
  return superagent.get(apiURL)
      .then(response => {
        console.log({response});
        dispatch(getAction(response.body))
      }).catch(err => console.log(err.message))
}

export const getElectronics = () => 
(dispatch,state)=>{
  return superagent.get(apiURL)
  .then(response => {
    // console.log({response});
    dispatch(getElectronic(response.body))
  }).catch(err => console.log(err.message))
}
export const getFood = () => 
(dispatch,state)=>{
  return superagent.get(apiURL)
  .then(response => {
    console.log({response});
    dispatch(getFoodd(response.body))
  }).catch(err => console.log(err.message))
}
// export const addToCart = (i) => {
//   return {
//     type:"ADDCART",
//     payload:i
//   }
// }

export function getCart(){
  return{
    type: 'GETCART',
  }
}

// export function selectCategory(categoryNmae) {
//     return{
//         type:"SELECT_CATEGORY",
//         payload: categoryNmae
//     };
// }


export function addToCart(productName) {
  console.log(productName);
    return {
      type: 'ADDCART',
      payload: productName,
    };
  }
  
export function deleteFromCart(productName) {
    return {
      type: 'REMOVECART',
      payload: productName,
    };
  }

  // export const decrementInventory = (id) => {
  //   return {
  //     type: 'DECREMENT_INVENTORY',
  //     payload: id,
  //   };
  // };
  
 // export function filterProducts(categorayName) {
//   return {
//     type: 'FILTER_PRODUCTS',
//     payload: categorayName,
//   };
// }
