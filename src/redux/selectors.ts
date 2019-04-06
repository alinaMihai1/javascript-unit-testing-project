import { AppState } from './index';
import { createSelector } from 'reselect';
import { Product } from '../data/entities';
import {filterProducts, searchProducts} from '../utils';

// state selectors
export const getSelectedCategory = (state: AppState) => state.categories.selectedCategory;
export const getAllCategories = (state: AppState) => state.categories.list;
export const getSearchKeyword = (state: AppState) => state.products.searchKeyword;
export const getProducts = (state: AppState) => state.products.list;

// composed selectors
export const getProductsByCategory = createSelector(
    [getSelectedCategory, getProducts],
    (selectedCategory:string, products: Product[]) => filterProducts(selectedCategory, products),
);

export const getProductsBySearchKeyword = createSelector(
    [getSearchKeyword, getProducts],
    (text:string, products:Product[]) => searchProducts(text, products),
);