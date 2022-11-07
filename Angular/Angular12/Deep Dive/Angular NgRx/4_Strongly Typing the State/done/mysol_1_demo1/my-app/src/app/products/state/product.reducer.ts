import { createReducer, on, createAction } from '@ngrx/store';

import { Product } from '../product';

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export const productReducer = createReducer(
  { showProductCode: true },
  on(createAction('[Product] Toggle Product Code'), state => {
    // console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
      // showProductCode: state.showProductCode = false,
    };
  })
);

