// flatMap es una combinación de flat y map
// Sirve para transformar un array a medida que lo vamos aplanando
// Solo puede aplanar a un nivel de profundidad de 1
// flatMap primero hace el map y después el flat


const players = [
    { playerId: 1, name: "Lautaro", attribute: ["Velocidad", "Penetración", "Tiro a pie firme"]},
    { playerId: 1, name: "Guido",attribute:["Concentración", "Tiro en movimiento", "Tiro a pie firme", "Velocidad"]},
    { playerId: 1, name: "Farris", attribute: ["Rebote ofensivo", "Fuerza", "Rebote defensivo"]},
];

// Sin flatMap
const playersAttributes = players.map(player => player.attribute).flat();

// Con flatMap
const playersAttributes2 = players.flatMap(player => player.attribute);



// Reto
// Crea un array con solo las fechas de inicio

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};


// Paso a paso
// Convertir un objeto en array
const calendarsInArray = Object.values(calendars);

// Aplanar array a un nivel
const calendarsInArrayWhitFlat = calendarsInArray.flat();

// Separar unicamente las startsDates
const startsDates2 = calendarsInArrayWhitFlat.map(date => date.startDate);

// Ahora en una sola linea:

// Con flat y map separados
const startsDates = Object.values(calendars).flat().map(date => date.startDate);

// Aplicando flatMap
const startsDatesWithFlatMap = Object.values(calendars).flatMap(calendar => calendar.map(date => date.startDate));