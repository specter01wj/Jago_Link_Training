
const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
};

export default async function updateOutput(id: string) {

}

runTheLearningSamples();

function runTheLearningSamples() {

  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`Product id=${id.toString()} and name=${name}`);
  }

  displayProductInfo(10, 'Pizza');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 11));

  function addNumbersDeclaration(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  const addNumbersExpression = function (x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  };

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(7, 11));

  // Return Scalar
  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza slice',
      icon: 'fas fa-pizza-slice',
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    },
  ];

  function getProductNames(): string[] {
    return sampleProducts.map((p) => p.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  // Return Types
  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find((p) => (id = p.id));
  }

  console.log(`${prefix} return ProductType`);
  console.table(getProductById(10));


  // Return void
  function displayProducts(products: ProductType[]): void {
    const productNames = products.map((p) => {
      const name = p.name.toLowerCase();
      return name;
    });
    const msg = `Sample products include: ${productNames.join(', ')}`;
    console.log(`${prefix} return void`);
    console.log(msg);
  }

  displayProducts(sampleProducts);



}













