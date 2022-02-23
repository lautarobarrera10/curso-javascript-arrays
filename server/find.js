// Find sirve para buscar un elemento que cumpla con una condición especifica
// En caso de haber varios va a retornar el primero que encuentre

const products = [
    {
        name: "TV",
        price: 100,
        id: 1,
    },
    {
        name: "Laptop",
        price: 100,
        id: 2,
    },
    {
        name: "PS3",
        price: 100,
        id: 5,
    },
    {
        name: "Auto",
        price: 100,
        id: 4,
    },
    {
        name: "Tostadora",
        price: 100,
        id: 5,
    },
];

// Con for
let rtaFinal;
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if (element.id === 3) {
        rtaFinal = element;
        break;
    }
}
console.log(rtaFinal);

// Con find
const id3 = products.find(product => product.id === 3);
console.log(id3);



// findIndex
// findIndex sirve para buscar el la posición dentro de un array que ocupa el elemento que estamos buscando

// Con for
let indexOfPS3 = -1;
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if (element.name === "PS3") {
        indexOfPS3 = index;
        break;
    }
}
console.log(indexOfPS3);

// Con findIndex
const ps3Index = products.findIndex(product => product.name === "PS3");
console.log(ps3Index);