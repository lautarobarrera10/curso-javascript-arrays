// Includes sirve para saber si un elemento está dentro del array  y retorna true en caso de ser así

const numbers = [1,2,3,4,5,6,7,7];

// Con for
let hay4 = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 4) {
        hay4 = true;
        break;
    }
}
console.log(hay4);

// Con includes
const incluye7 = numbers.includes(7);
console.log(incluye7);

// También puede usarse en strings
const string = "Hola, soy un texto.";

const diceTexto = string.includes('texto');
console.log(diceTexto);

// Este último si se combina con un if y un filter puede hacerse un buscador.