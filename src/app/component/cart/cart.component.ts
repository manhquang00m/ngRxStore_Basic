import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AppState,
  selectAllProduct,
} from 'src/app/store/product/cart.selector';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';
import { ProductState } from 'src/app/store/product/cart.reducer';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  count$: Observable<any>;
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectAllProduct);
  }

  ngOnInit() {
    console.log(this.count$);
    this.count$.subscribe((val) => {
      console.log(val);
    });
  }
}
