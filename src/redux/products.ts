import { FETCH_PRODUCTS, SEARCH_KEYWORD } from "./actions";
import { AppAction, Product } from "../data/entities";

export interface ProductsState {
  list: Product[];
  searchKeyword: string;
}

const initialState = {
  list: [],
  searchKeyword: ""
};

export default (state = initialState, action: AppAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return { ...state, list: action.payload };
    }
    case SEARCH_KEYWORD: {
      return { ...state, searchKeyword: action.payload };
    }
    default:
      return state;
  }
};
