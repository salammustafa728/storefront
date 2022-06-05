import { products } from '../store/data';

export const initialState = {
  products:products,
  filterProducts: [],
  inventoryCount:products.inventoryCount
};

export const productsRducer = (state = initialState, action) => {
  const { type, payload } = action;

  let filterProducts;
  let products;

  switch (type) {
    case "FILTER_PRODUCTS":
      products = state.products;
      // console.log(state.products+'rrrrrrrrrr');
      filterProducts = state.products.filter((product) => product.category === payload);
      // console.log({filterProducts});
      return { filterProducts, products };

      case 'ADD_TO_CART':
        products = state.products;
        filterProducts = state.filterProducts.map((product) => {
          if (product.name === payload) {
             product.inventoryCount = product.inventoryCount - 1;
          }
          return product;
        });
  
        return { filterProducts, products };
  
      case 'DELETE_FROM_CART':
        products = state.products;
        filterProducts = state.filterProducts.map((product) => {
          if (product.name === payload) {
           product.inventoryCount = product.inventoryCount + 1;
          }
          return product;
        });
  
        return { filterProducts, products };

        case 'DECREMENT_INVENTORY':
          products = state.products;
          filterProducts = state.filterProducts.map((product) => {
            if (product.id === payload && product.inventoryCount > 0) {
              return { ...product, inventoryCount: product.inventoryCount - 1 };
            } else {
              return product;
            }
          });
          return {filterProducts,products};

    default:
      return state;
  }
};



