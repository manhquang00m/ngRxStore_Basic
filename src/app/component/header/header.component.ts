import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';
// import { stateApp } from 'src/app/store/product/cart.reducer';
// import { selectAmount } from 'src/app/store/product/cart.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  amount: number = 0;
  total: number = 0;
  state$: Observable<any>;

  constructor(private store: Store<{ state: object }>) {
    this.state$ = store.select('state');
  }

  ngOnInit() {
    // this.state$.forEach((e) => {
    //   this.amount = e.amount;
    //   this.total = e.price;
    // });
    // this.state$.forEach((e) => {
    //   console.log(e.item);
    // });
  }
}
