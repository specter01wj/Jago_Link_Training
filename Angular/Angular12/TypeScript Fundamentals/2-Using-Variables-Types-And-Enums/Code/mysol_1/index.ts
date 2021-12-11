// string, number, boolean, array, undefined, null, any

let firstName: string | null;
firstName = 'Dan';

let age: number = 45;

let hasPurchased: boolean = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);


enum ProductType {
  Sports = 66,
  HomeGoods,
  Groceries,
}

let pt = ProductType.Sports;
console.log(pt);

if (pt === ProductType.Sports) {
  console.log('Found sports product type.');
}

