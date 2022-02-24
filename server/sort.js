// sort ordena nuestro array según el código ASCII;

const months = ["March", "Jan", "Feb", "Dec"];
console.log("Meses:", months.sort());

// Ordenar números
const numbers = [1, 30, 4, 21, 100000];
// de menor a mayor
console.log("Números de menor a mayor: ", numbers.sort((a,b) => a-b));

// de mayor a menor
console.log("Números de mayor a menor: ", numbers.sort((a,b) => b-a));

// Carácteres especiales
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

console.log("Carácteres especiales: ", words.sort());
// En caso de que no funciones podemos hacer:
console.log("Carácteres especiales: ", words.sort((a,b) => a.localeCompare(b))); // Esto puede ser necesario en software viejo


// Con arrays de objetos
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a,b) => a.total - b.total);
console.log("Ordenes ordenadas de menor a mayor", orders);