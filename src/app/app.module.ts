import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';

import { ProductComponent } from './component/product/product.component';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { cartReducer } from './store/product/cart.reducer';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    StoreModule.forRoot({ product: cartReducer }),
    RouterModule.forRoot([
      { path: 'cart', component: CartComponent },
      { path: 'product', component: ProductComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
