// La función de map es TRANSFORMAR
// El método map es INMUTABLE
const letters = ["a", "b", "c", "d"];

// Con for
const newsLetters = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newsLetters.push(element + '+');
}
console.log(letters, newsLetters);

// Con map
const newsLetters2 = letters.map(letter => letter + '+');
console.log(newsLetters2);