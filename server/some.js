// some sirve para saber si un elemento del array cumple una codición
// si al menos uno lo cumple, some retorna true

const pedidos = [
    {
        customerName: "Lautaro",
        price: 200,
        delivered: false,
    },
    {
        customerName: "Camila",
        price: 220,
        delivered: false,
    },
    {
        customerName: "Juan",
        price: 200,
        delivered: false,
    },
];

// Con for
let algunoEntregado = false;
for (let index = 0; index < pedidos.length; index++) {
    const element = pedidos[index];
    if (element.delivered) {
        algunoEntregado = true;
        break
    }
}
console.log(algunoEntregado);

// Con some
const alMenosUnoEntregado = pedidos.some(pedido => pedido.delivered);
console.log(alMenosUnoEntregado);