import { Action } from "redux";
import { any } from "prop-types";

export interface Category {
    id: string,
    title: string,
    box_limit: number,
    is_default: boolean,
    recently_added: boolean,
    hidden: boolean
}

export interface Product {
id: string,
      sku: string,
      title: string,
      description: string,
      list_price: string,
      is_vatable: boolean,
      is_for_sale: boolean,
      age_restricted: boolean,
      box_limit: number,
      always_on_menu: boolean,
      volume: string,
      zone: any,
      created_at: string,
      categories: any[],
      tags: [],
      images: any;
}

export interface AppAction extends Action {
    payload: any;
}