import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/product';
import { addtoCart } from './cart.action';

export interface Data {
  id: number;
  amount: number;
  price: number;
}

export interface ProductState {
  item: Product[];
  data: Data[];
}

export const initialState: ProductState = {
  item: [
    {
      id: 1,
      name: 'Samsung Galaxy Note 20',
      price: 10,
      image:
        'https://photo-cms-kienthuc.zadn.vn/zoom/800/Uploaded/ctvkhoahoc/2020_05_25/kienthucgalaxynote20-1_JKCL.jpg',
    },
    {
      id: 2,
      name: 'Samsung Galaxy Note 20',
      price: 10,
      image:
        'https://photo-cms-kienthuc.zadn.vn/zoom/800/Uploaded/ctvkhoahoc/2020_05_25/kienthucgalaxynote20-1_JKCL.jpg',
    },
  ],
  data: [
    { id: 1, amount: 0, price: 0 },
    { id: 2, amount: 0, price: 0 },
    { id: 3, amount: 10, price: 0 },
  ],
};

export const cartReducer = createReducer(
  initialState,
  on(addtoCart, (state, action) => {
    let newData: Data[] = state.data;
    const index = newData.findIndex((e) => e.id === action.id);
    newData[index].amount = 7;
    console.log(state);
    return {
      ...state,
      data: [...newData],
    };
  })
);
