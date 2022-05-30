import { categories } from "../store/data";
import { products } from "../store/data";

export const initialState = {
  categories: categories,
  activeCategory: {},
  products: products,
};

export const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SELECT_CATEGORY":
      const categories = state.categories;
      const products = state.products;
      let activeCategory;
      state.categories.map((category) => {
        if (category.normalizedName === payload) activeCategory = category;
      });

      return { categories, activeCategory, products };
    default:
      return state;
  }
};
