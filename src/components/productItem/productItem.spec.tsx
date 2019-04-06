import ProductItem from './productItem';
import React from 'react'
import {render, fireEvent} from 'react-testing-library';
import products from '../../data/products';

const product:any = products.data[0];

describe('ProductItem', () => {
 it('should toggle the description', () => {
     const {debug, container} = render(<ProductItem item={product}/>);
     const descriptionField = container.querySelector('.product-item__description');
     const element:any = container.querySelector('li');
     // initially the description is not visible
     expect(descriptionField).toBeFalsy();

     // on clicking the first time the product item, 
     // it should display the description
     fireEvent.click(element);
     expect(container.querySelector('.product-item__description')).toBeTruthy();

     // on clicking the product again it,the description should not be visible
     fireEvent.click(element);
     expect(container.querySelector('.product-item__description')).toBeFalsy();
 });
});