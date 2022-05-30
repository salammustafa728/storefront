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