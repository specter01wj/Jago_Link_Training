import { Product } from './product';

export class ShoppingCartItem {
  // product: Product;
  // quantity: number;

  constructor(public product: Product, public quantity: number) {}

  get totalPrice() {
  	return this.product.price * this.quantity;
  }
}