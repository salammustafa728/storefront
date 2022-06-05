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
  
 