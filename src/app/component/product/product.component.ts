import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/product';
import { addtoCart } from 'src/app/store/product/cart.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy Note 20',
      price: 10,
      image:
        'https://photo-cms-kienthuc.zadn.vn/zoom/800/Uploaded/ctvkhoahoc/2020_05_25/kienthucgalaxynote20-1_JKCL.jpg',
    },
    {
      id: 2,
      name: 'Iphone 12 Promax Apple',
      price: 20,
      image:
        'https://cdn.tgdd.vn/Files/2019/10/06/1205562/iphone-12-1_800x451-600x400.jpg',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S20 Ut',
      price: 30,
      image:
        'https://cdn.tgdd.vn/hoi-dap/1425211/top-5-dien-thoai-duoi-5-trieu-ban-chay-nhat-thang-03-2022-11-800x500.jpg',
    },
  ];

  constructor(private store: Store) {}

  ngOnInit() {}

  addToCart(product: Product) {
    console.log(product);
    this.store.dispatch(addtoCart({ id: product.id }));
  }
}
