// splice y push.
// splice sirve para eliminar un elemento de un array y push para empujarle un elemento al final

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

productIndex = products.findIndex(product => product.id === '🍔');

myProducts.push(products[productIndex]);
products.splice(products[productIndex], 1);

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Reto haz el mismo proceso de arriba pero sin mutar el array original

const productsReto = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProductsReto = [];

console.log("products", productsReto);
console.log("myProducts", myProductsReto);
console.log("-".repeat(10));

productIndexReto = productsReto.findIndex(product => product.id === '🍔');
myProductsReto.push(productsReto[productIndexReto]);

const productsReto2 = productsReto.filter(product => product.id != '🍔');

console.log("products-original", productsReto);
console.log("products", productsReto2);
console.log("myProducts", myProductsReto);
console.log("-".repeat(10));



// Como hacer un update
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProductsV2 = [];

console.log("productsV2", productsV2);

const update = {
    id: '🥞',
    changes: {
        description: "deliciosos",
        price: 200,
    }
}

productIndexV2 = productsV2.findIndex(product => product.id === update.id);

productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};

console.log("productsUpdate", productsV2);
console.log("-".repeat(10));



// Ahora sin mutar el array original 
const productsV3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const updateV3 = {
    id: '🥞',
    changes: {
        description: "deliciosos",
        price: 200,
    }
}

productIndexV3 = productsV3.findIndex(product => product.id === '🥞');

const productsV3update = [...productsV3];

productsV3update[productIndexV3] = {
    ...productsV3update[productIndexV3],
    ...updateV3.changes,
}

console.log("productsV3-original", productsV3);
console.log("productsV3-update", productsV3update);
