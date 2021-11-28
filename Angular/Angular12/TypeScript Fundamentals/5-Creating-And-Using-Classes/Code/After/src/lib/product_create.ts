import { Product } from './interfaces';

class FoodProduct {
	id = 0;
	name = '';
	icon = '';

	// constructor(public id: number, public name: string, public icon: string) { }
	constructor(id: number, name: string, icon: string) {
		this.id = id;
		this.name = name;
		this.icon = icon;
	}

	validate(): boolean {
		return !!this.id && !!this.name && !!this.icon;
	}
	
}


// properties
/*let fp = new FoodProduct();
fp.id = 1;
fp.name = 'Pizza';
fp.icon = 'icon.jpg';*/


// constructor
let fp = new FoodProduct(1, 'Pizza', 'icon.jpg');
console.log(fp.name);


// extend class
abstract class ProductBase implements Product {
  constructor(public id: number, public name: string, public icon: string) {}
  validate(): boolean {
    throw new Error('Not implemented');
  }
}


export class FoodProduct2 extends ProductBase {
  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}








