import { productsURL } from './config';
import { Product } from './interfaces';

/* export async function getProducts(): Promise<{id: number, name: string, icon: string}> {
  const response: Response = await fetch(productsURL);
  const products: {id: number, name: string, icon: string} = await response.json();
  return products;
} */

export async function getProducts(): Promise<Product[]> {
  const response: Response = await fetch(productsURL);
  const products: Product[] = await response.json();
  return products;
}

