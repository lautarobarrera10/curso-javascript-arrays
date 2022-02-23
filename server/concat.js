// concat sirve para concatenar dos elementos. Puede usarse en arrays o strings.

const array = [1,2,3,4,5];
const array2 = [6,7,8,9,10];

const arrayFinal = array.concat(array2);
console.log(arrayFinal);

const texto = "Hola mi nombre es ";
const nombre = "Lautaro";
const saludo = texto.concat(nombre);
console.log(saludo);







// Como modificar el array original agregandole los elementos de otro array con spread operator
const numeritos = [1,2,3];
const numeritos2 = [4,5,6];
numeritos.push(...numeritos2) // si no usamos el spread operator vamos a insertar el array entero en una sola posición.
console.log(numeritos);







// Dato interesante con el spread operator y los strings
const letras = "quiero separar estas letras.";

const letrasSeparadas = [...letras];
console.log(letrasSeparadas);