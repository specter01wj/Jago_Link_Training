import { Product } from './product';

export class ShoppingCartItem {
  // product: Product;
  // quantity: number;
  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() {
  	return this.price * this.quantity;
  }

}