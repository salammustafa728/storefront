let initialState = {
  categories: [
   
  { normalizedName: 'Fruit', displayName: 'Fruit', description: 'AVAILBALE Fruit SALADS' },
  { normalizedName: 'Flower', displayName: 'Flower', description: 'AVAILBALE Flower ARRANGEMENTS' }
  ],
  products: [
    {
      category: 'Fruits',
      name: 'Peach and Berry Salad',
      description: 'This is a fabulous late-summer Fruit salad. Use it on pancakes, waffles or French toast.',
      price: '7JOD',
      inventoryCount: 15,
  img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9366943.jpg&q=85',
    },
    {
      category: 'Fruits',
      name: 'Berry Fruit Salad',
      description: 'Mixture of different delicious berries.',
      price: '10JOD',
      inventoryCount: 5,
   img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9155453.jpg&q=85',
    },
    {
        category: 'Fruits',
        name: 'Perfect Summer Fruit Salad',
        description: 'The perfect Fruit salad for a backyard bbq or any occasion. ',
        price: '8JOD',
        inventoryCount: 9,
       img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F2289556.jpg',
      },
    {
      category: 'Flower',
      name: '250 Roses',
      description: 'The arrangement contains Rose: Height 40 CM Width 65 CM',
      price: '250JOD',
      inventoryCount: 4,
      img: 'https://floward.imgix.net/web/Files/thumPro/637506242368301139.jpg',
    },
    {
      category: 'Flower',
      name: 'Hortensia',
      description: 'A blooming and multicolored selection of Flower arranged together to make the perfect piece of decoration wherever it is set: Height 50 CM Width 32 CM  ',
      price: '197JOD ',
      inventoryCount: 2,
     img: 'https://floward.imgix.net/web/Files/thumPro/637369644984924966.jpg',
    },
    {
        category: 'Flower',
        name: 'Mimi',
        description: 'The arrangement contains Sea Lavender, Eustoma, Rose, hydrangea, Eucalyptus: Height 45 CM Width 30 CM',
        price: '100JOD',
        inventoryCount: 12,
       img: 'https://floward.imgix.net/web/Files/thumPro/637708308066616734.jpg',
      }
   ],
  activeCategory : ''
}
const changeCategory = (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {

    case 'Electronics':
      let activeCategory = 'Electronics';
      let categories = state.products.map(category => {
        console.log(category+'uuuuuuu');
        if (category.displayName === "Electronics") {
          return { displayName: category.displayName, description: category.description }
        }
        return category;
      });
      let fetched = payload; 
      console.log({fetched});     
      let products = fetched.filter(product => product.categoryAssociation === activeCategory);
      console.log({products}); 
      return { activeCategory, categories, products };

    case 'Food':
      let active = 'Food';
      let cats = state.products.map(category => {
        if (category.displayName === payload) {
          return { displayName: category.displayName, description: category.description }
        }
        return category;
      });
      let fetchedProducts = payload;  
          
      let prods = fetchedProducts.filter(product => product.categoryAssociation === active);
      console.log({prods});   
      return { activeCategory: active, categories: cats, products: prods};  

    case 'ADDCART':
      let items = state.products.map(product => {
        if (product === payload) {
          return { id: product.id, categoryAssociation: product.categoryAssociation, displayName: product.displayName, description: product.description, price: product.price, inventoryCount: product.inventoryCount - 1, image: product.image };
        }
        return product;
      })  

      return {categories: state.categories, activeCategory: state.activeCategory, products: items};

    case 'REMOVECART':
      let allItems = state.products.map(product => {
        if (product === payload) {
          return { id: product.id, categoryAssociation: product.categoryAssociation, displayName: product.displayName, description: product.description, price: product.price, inventoryCount: product.inventoryCount + 1, image: product.image };
        }
        console.log({product});
        return product;
      })  
      console.log(state.products+">>>");
      return { categories: state.categories, activeCategory: state.activeCategory, products: allItems};

    case 'GET':
      let fetchedProds = payload;
      console.log(fetchedProds);
      // console.log(state.categories);
      return { categories: state.categories, activeCategory: state.activeCategory, products: fetchedProds};
      
    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}

export default changeCategory;
// import { categories } from "../store/data";
// import { products } from "../store/data";

// export const initialState = {
//   categories: categories,
//   activeCategory: {},
//   products: products,
// };

// export const categoryReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "SELECT_CATEGORY":
//       const categories = state.categories;
//       const products = state.products;
//       let activeCategory;
//       state.categories.map((category) => {
//         if (category.normalizedName === payload) activeCategory = category;
//       });

//       return { categories, activeCategory, products };
//     default:
//       return state;
//   }
// };
