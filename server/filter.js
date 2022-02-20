// filter sirve para filtrar nuestro array según una condición

const words = ['spray', 'limit', 'elite', 'exuberant'];

// con for
const newsWords = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
        newsWords.push(element);
    }
}

console.log(words);
console.log(newsWords);

// Con filter
const newsWords2 = words.filter(word => word.length >= 6)

console.log(words);
console.log(newsWords2);