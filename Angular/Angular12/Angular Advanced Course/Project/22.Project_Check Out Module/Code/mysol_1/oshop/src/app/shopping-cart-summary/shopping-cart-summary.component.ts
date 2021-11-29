import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from './../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {
	@Input('cart') cart: ShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}
