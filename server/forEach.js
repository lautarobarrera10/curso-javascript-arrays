// Sirve para recorrer los elementos de un array

// Ejemplo
const letters = ["a", "b", "c", "d"];

// Con for
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log(element);
}

// Con forEach
letters.forEach(letter => console.log(letter));