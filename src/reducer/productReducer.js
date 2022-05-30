export const initialState = {
  filterProducts: [],
};

export const productsRducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FILTER_PRODUCTS":
      const filterProducts = payload.products.filter(
        (product) => product.category === payload.categoryNmae
      );

      return { filterProducts };
    default:
      return state;
  }
};
