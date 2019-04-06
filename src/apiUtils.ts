import products from './data/products';
import { FETCH_PRODUCTS, FETCH_CATEGORIES, SELECT_CATEGORY, SEARCH_KEYWORD } from './redux/actions';
import { Dispatch } from 'redux';
import { categories } from './data/categories';

export function getCategories(dispatch: Dispatch) {
    dispatch({ type: FETCH_CATEGORIES, payload: categories.data });
}

export function getProducts(dispatch: Dispatch) {
    dispatch({ type: FETCH_PRODUCTS, payload: products.data });
}

export function selectCategory(dispatch: Dispatch, categoryId: string) {
    dispatch({ type: SELECT_CATEGORY, payload: categoryId });
}

export function searchBy(dispatch: Dispatch, text: string) {
    dispatch({ type: SEARCH_KEYWORD, payload: text });
}
