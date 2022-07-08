import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './cart.reducer';

export interface AppState {
  product: ProductState;
}
// export const selectProduct = (state: AppState) => state.product;

export const selectProduct = createFeatureSelector<AppState, ProductState>(
  'product'
);
export const selectAllProduct = createSelector(
  selectProduct,
  (productState: ProductState) => productState.data
);
