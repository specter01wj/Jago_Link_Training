import { Product } from './interfaces';

class FoodProduct {
  id = 0;
  name = '';
  icon = '';

  constructor(id: number, name: string, icon: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }

  validation(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }

}

let fp = new FoodProduct(1, 'Pizza', 'icon.jpg');
// fp.id = 1;
// fp.name = 'Pizza';
// fp.icon = 'icon.jpg';

console.log(fp.name);


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






