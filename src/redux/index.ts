import { combineReducers } from 'redux'
import products, { ProductsState } from './products';
import categories, { CategoriesState } from './categories';

export interface AppState {
  products: ProductsState,
  categories: CategoriesState
}

export default combineReducers({
  products,
  categories
})
