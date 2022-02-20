// La función de map es TRANSFORMAR
// El método map es INMUTABLE
const letters = ["a", "b", "c", "d"];

// Con for
const newsLetters = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newsLetters.push(element + '+');
}
console.log(letters, newsLetters);

// Con map
const newsLetters2 = letters.map(letter => letter + '+');
console.log(newsLetters2);


// Map reloaded
const products = [
    {
        name: 'Play Station 3',
        price: 100,
    },
    {
        name: 'TV',
        price: 120,
    },
    {
        name: 'PC',
        price: 300,
    },
    {
        name: 'Laptop',
        price: 250,
    },
];

// Acá usamos map para hacer limpieza de datos y separar los precios en un nuevo array para su posterior uso
const productPrices = products.map(product => product.price);
console.log(productPrices);

// Acá usamos map para crear un nuevo array donde se incluya el impuesto de cada producto.
const productsWithTaxes = products.map(product => {
    tax = product.price * 0.66;
    return {
        ...product,
        tax
    }
})

console.log(productsWithTaxes);
console.log(products);