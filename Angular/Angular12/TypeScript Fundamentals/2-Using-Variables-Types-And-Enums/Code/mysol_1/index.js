// string, number, boolean, array, undefined, null, any
let firstName;
firstName = 'Dan';
let age = 45;
let hasPurchased = true;
let productNames = [];
productNames.push('Basketball');
let petCount = [];
petCount.push(5);
console.log(firstName, age, hasPurchased, productNames, petCount);
var ProductType;
(function (ProductType) {
    ProductType[ProductType["Sports"] = 66] = "Sports";
    ProductType[ProductType["HomeGoods"] = 67] = "HomeGoods";
    ProductType[ProductType["Groceries"] = 68] = "Groceries";
})(ProductType || (ProductType = {}));
let pt = ProductType.Sports;
console.log(pt);
if (pt === ProductType.Sports) {
    console.log('Found sports product type.');
}
