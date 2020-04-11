import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router } from '@angular/router';
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
//import { OrderService } from './../order.service';
//import { AuthService } from './../auth.service';
//import { Order } from './../models/order';
//import { Subscription } from 'rxjs/Subscription';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  cart$: Observable<ShoppingCart>;
	// cart: ShoppingCart;
  // cartSubscription: Subscription;
	
	
  constructor(
  	private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  	// let cart$ = await this.shoppingCartService.getCart();
  	// this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
  	// this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

/*  ngOnDestroy() {
  	this.cartSubscription.unsubscribe();
  	this.userSubscription.unsubscribe();
  }*/
  

}
