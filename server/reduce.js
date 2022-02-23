// Reduce va a reducir nuestro array a un solo elemento
const numbers = [1,2,3,4,5,6,7,8,10];

// Con for
let sumaTotalFor = 0;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sumaTotalFor += element;
}
console.log(sumaTotalFor);

// Con reduce
const sumaTotal = numbers.reduce((suma, number) => suma = suma + number);
console.log(sumaTotal);