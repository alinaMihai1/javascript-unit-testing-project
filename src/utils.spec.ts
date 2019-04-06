import { searchProducts, filterProducts } from './utils';
import products from './data/products';
import { Product } from './data/entities';

const allProducts:any[] = products.data;

describe('search products functionality', () => {
    it('given an empty search keyword, it should return an empty array', () => {
        const text = '';
        const result = searchProducts(text, allProducts);
        expect(result).toEqual([]);
    });
    it('given an empty array of products, it should return an empty array', () => {
        const result = searchProducts('dummy', []);
        expect(result).toEqual([]);
    });
    it('given no products, it should return an empty array', () => {
        const result1 = searchProducts('dummy', undefined);
        expect(result1).toEqual([]);

        const result2 = searchProducts('dummy', null);
        expect(result2).toEqual([]);
    });

    it(`given a search keyword and products that contain that keyword in the title,
    it should return the products containing the keyword`, () => {
        const keyword = 'Borsao';
        const result = searchProducts(keyword, allProducts);
        expect(result.length).toEqual(2);
    });
    it(`given a search keyword and products that contain that keyword in the description,
    it should return the products containing the keyword`, () => {
        const keyword = 'This';
        const result = searchProducts(keyword, allProducts);
        expect(result.length).toEqual(177);
    });
    it(`given a product with no description, shouldn't crash the search`, () => {
        const result = searchProducts('dummy', allProducts.concat({title: 'p1'} as any));
        expect(result).toEqual([])
    });
});

describe('filter products by category functionality', () => {
    it('given no category, it should return no results', () => {
        const selectedCategory = '';
        const result = filterProducts(selectedCategory, allProducts);
        expect(result).toEqual([]);
    });
    it('given no products, it should return no results', () => {
        const selectedCategory = 'faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9';
        const result = filterProducts(selectedCategory, []);
        expect(result).toEqual([]);
    });
    it('given a category, it should return all the products containing that category', () => {
        const selectedCategory = 'faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9';
        const result = filterProducts(selectedCategory, allProducts);
        expect(result.length).toEqual(134);
    });
});