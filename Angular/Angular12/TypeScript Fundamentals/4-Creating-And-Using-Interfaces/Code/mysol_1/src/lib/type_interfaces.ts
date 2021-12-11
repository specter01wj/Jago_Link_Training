export interface Product {
  id: number;
  name: string;
  icon: string;
  description?: string;
  validate(): boolean;
}

type ProductAlias =
  | string
  | number
  | {
      id: number;
      name: string;
      icon: string;
      description?: string;
    };


let product: ProductAlias = 'Food';

enum ProductType {
  Sporting,
  Home,
}

type ProductTypeList = 'SPORTING' | 'HOME';
let p: ProductTypeList = 'SPORTING';

