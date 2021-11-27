import { productsURL } from '../lib';

const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
};

export default async function updateOutput(id: string) {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: ProductType[]) {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
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


  // Arrow functions



  // Optional parameters

  function createProduct(name: string, icon?: string): ProductType {
    const id = getRandomInt(1000);
    return {
      id,
      name,
      icon,
    };
  }

  const getRandomInt = (max: number) => Math.floor(Math.random() * max);
  let pineapple = createProduct('pineapple', 'pine-apple.jpg');
  let mango = createProduct('mango');
  console.log(pineapple, mango);

  // Default parameters
  function createProductWithDefaults(
    name: string,
    icon: string = 'generic-fruit.jpg',
  ): ProductType {
    const id = getRandomInt2();
    return {
      id,
      name,
      icon,
    };
  }

  const getRandomInt2 = (max: number = 1000) => Math.floor(Math.random() * max);

  console.log(`${prefix} Default parameters`);
  pineapple = createProductWithDefaults('pineapple', 'pine-apple.jpg');
  mango = createProductWithDefaults('mango');
  console.log(pineapple, mango);









}



// Async Function
async function getProducts(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}









