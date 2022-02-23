// join sirve para unir arrays en un elemento

const animals = ["Oveja", "Vaca", "Tiburón"];

const animalsJuntos = animals.join('-')
console.log(animalsJuntos);

// Para usar con una cadena de texto primero debemos pasarlo por el método split

const title = "Curso de JavaScript";

// Al split hay que pasarme como parámetro lo queremos que haga las separaciones, en este caso el espacio
const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(urlFinal);