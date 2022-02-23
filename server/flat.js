// Flat sive para aplanar un array
// Debemos pasarle como parámetro la profundidad con la que queremos aplanar

const numbers = [
    [1,2,3],
    [4,5, [6,7,8]],
    [9,10,11, [12, [13, 14]]],
];

const numbersFlated = numbers.flat(3);
console.log(numbersFlated);

// Reto de crear mi propio flat
function aplanarArray (array) {
    let newArray = [];
    array.forEach(element => {
        if (Array.isArray(element)) {
            newArray = newArray.concat(aplanarArray(element));
        } else {
            newArray.push(element);
        }
    });
    return newArray;
}
console.log(aplanarArray(numbers));