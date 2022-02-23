// every va a confirmar si todos los elementos del array cumplen una condición
// En caso de que uno no lo cumpla va a retornar false

const pedidos = [
    {
        customerName: "Lautaro",
        price: 200,
        delivered: true,
    },
    {
        customerName: "Camila",
        price: 220,
        delivered: true,
    },
    {
        customerName: "Juan",
        price: 200,
        delivered: true,
    },
];

// Con for
let todosEntregadosFor = true;
for (let index = 0; index < pedidos.length; index++) {
    const element = pedidos[index];
    if (!element.delivered) {
        todosEntregadosFor = false;
        break;
    }
}
console.log(todosEntregadosFor);

// Con every
const todosEntregados = pedidos.every(pedido => pedido.delivered);
console.log(todosEntregados);

