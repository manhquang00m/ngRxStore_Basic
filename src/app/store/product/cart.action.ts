import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/product';

export const addtoCart = createAction(
  '[Product Component] Increment',
  props<{ id: number }>()
);
