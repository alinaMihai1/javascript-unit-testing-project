import ProductList from './productList';
import React from 'react'
import {render} from 'react-testing-library';
import products from '../../data/products';

const allProducts:any = products.data;

describe('ProductList', () => {
 it('should show a list of products', () => {
     const {container} = render(<ProductList items={allProducts}/>);
     const items = container.querySelectorAll('li');
     expect(items.length).toEqual(allProducts.length);
 });
 it('should show an empty state message, when no products', () => {
    const {getByText, container} = render(<ProductList items={[]}/>);
    const items = container.querySelectorAll('ProductItem');
    expect(items.length).toEqual(0);
    expect(getByText('No items found')).toBeTruthy();
 });
});