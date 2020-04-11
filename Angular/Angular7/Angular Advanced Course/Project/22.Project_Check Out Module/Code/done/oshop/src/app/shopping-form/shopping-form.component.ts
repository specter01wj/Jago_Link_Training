import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from './../order.service';
import { AuthService } from './../auth.service';
import { Order } from './../models/order';
import { ShoppingCart } from './../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;

	shipping = {}; 
	userId: string;
	userSubscription: Subscription;

  constructor(private router: Router,
    private authService: AuthService,
    private orderService: OrderService) { }

  async ngOnInit() {
  	this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
  	this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.storeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }    

}
