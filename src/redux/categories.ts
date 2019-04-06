import { FETCH_CATEGORIES, SELECT_CATEGORY } from "./actions";
import { Category, AppAction } from "../data/entities";

export interface CategoriesState {
    list: Category[];
    selectedCategory: string
}

const initialState = {
    list: [],
    selectedCategory: undefined
}

export default (state = initialState, action: AppAction) => {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      return {...state, list: action.payload};   
    }  
    case SELECT_CATEGORY: {
        return {...state, selectedCategory: action.payload}
    }
    default:
      return state
  }
}