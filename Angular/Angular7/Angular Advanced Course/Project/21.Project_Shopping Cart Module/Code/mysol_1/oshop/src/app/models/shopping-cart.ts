import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: {[productId: string]: ShoppingCartItem}) {
  	this.itemsMap = itemsMap || {};
  	
  	for (let productId in itemsMap) {
			// this.items.push(itemsMap[productId]);
			let item = itemsMap[productId];
			let x = new ShoppingCartItem();
			Object.assign(x, item);
			x.$key = productId;
			this.items.push(x);
		}
  }

  get totalSum() {
		let sum = 0;
		for (let productId in this.items) {
			sum += this.items[productId].totalPrice;
		}
		return sum;
	}

  get totalItemsCount() {
  	let count = 0;
		for(let productId in this.itemsMap) {
		    count += this.itemsMap[productId].quantity;
		}
		return count;
  }

  getQuantity(product: Product) {
    let item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
	}

}