import { Product } from './product';

export class ShoppingCartItem {
  // product: Product;
  // quantity: number;
  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;

  // constructor(public product: Product, public quantity: number) {}

  get totalPrice() {
  	return this.price * this.quantity;
  }

}