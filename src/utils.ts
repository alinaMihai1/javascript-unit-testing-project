import { Product } from './data/entities';

// filter and search logic
export function filterProducts(selectedCategory: string, products: Product[]) {
    return products.filter(
        (product: Product) =>
            product.categories && product.categories.find((category) => category.id === selectedCategory),
    );
}
export function searchProducts(searchWord = '', products = [] as Product[]) {
    return (products && searchWord)
        ? products.filter((product: Product) => {
              const { description = '', title = '' } = product;
              const regExp = new RegExp(`${searchWord}`, 'mgi');
              return searchWord.trim() && (regExp.test(description) || regExp.test(title));
          })
        : [];
}
