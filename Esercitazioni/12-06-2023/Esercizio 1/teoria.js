// Arrow function
const variableFunction = function (param) {};

function classicFunction(number) {
  console.log(this); // il this indica il contesto corrente
  return number * 2;
}

classicFunction();

// 1. Le a.f. sono sempre anonime, non hanno un loro nome, ma possiamo inserirle in varibili;
// 2. Possono avere un return implicito;
// 3. Se abbiamo solo e soltanto 1 parametro possiamo omettere le ();
// 4. Nelle a.f. non riusciamo a recuperare il this corrente es. negli object;

// const arrowFunction = () => {
//   return 21;
// };
const arrowFunction = (number) => number * 2; // return implicito
console.log(arrowFunction(1));
console.log(arrowFunction(2));
console.log(arrowFunction(3));
console.clear();

// Ripassino su map/forEach/filter
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// stampare in console tutti gli elementi dell'array

// sono tutte "high order function"

// Usiamo il forEach
// 1. è un metodo deglli array, lo possiamo invocare usando il .forEach()
// 2. tra le () riceve una function che viene eseguita per ogni elemento dell'array
// 3. le function ha sempre questi params: (item, index, array)
// 4. il forEach torna sempre undefined.
// 5. Non possiamo eseguire un break dentro il ciclo;
const forEachFunc = (item, index) => {
  console.log(index, item);
};

array.forEach(forEachFunc);

array.forEach(function (item, index) {
  console.log(index, item);
});

array.forEach((item, index) => console.log(index, item));

for (const item of array) {
  console.log(item);
}

console.clear();
// Map
// partendo da un array ne torna uno nuovo in cui il
// nuovo valore di ogni elemento è dato dal risultato
// delle function passata al map che ha per argomento (item, index, array);

// 1. Non modifica l'array di partenza, ne crea sempre uno nuovo
// 2. Riceve tra () una function tipica degli array methods function(item, index, array)

const getDouble = (item) => item * 2;
// const doubledArray = array.map(function (item, index, array) {
//   // index 0 -> 1 => 1 * 2 => nuovo index 0 = 2
//   return item * 2;
// });
const doubledArray = array.map(getDouble);

// const clonedArray = array.map((item) => item);
// console.log(clonedArray);

console.log(array);
console.log(doubledArray);

// Filter
// torna sempre un nuovo array partendo da uno iniziale
// non modifica gli elementi ma li rimuove basandosi
// sul return dell function passata

// 1. La function che passo al filter, viene eseguita su ogni elemento;
// 2. vengono aggiunti gli item solo se la function torna true;

// const moreThenFive = array.filter(function (item, index, array) {
//   return item > 5;
// });
const isMoreThenFive = (item) => item > 5;
const moreThenFive = array.filter(isMoreThenFive);

// const newArray = [];
// for (const item of array) {
//   if (item > 5) {
//     newArray.push(item);
//   }
// }

console.log(moreThenFive);

// concatenazione degli array methods;
"ciao".charAt(0).toUpperCase().concat("iao"); // Ciao

// 3n
// array // è array
//   .map((item) => item * 2) // torna array
//   .filter((item) => item > 5) // torna array
//   .forEach((item) => console.log(item)); // torna undefined

const everyIsGreaterThenZero = array.every(function (item) {
  return item > 0;
});
console.log(everyIsGreaterThenZero);

const someIsGreaterThenZero = array.some(function (item) {
  console.log(item);
  return item > 0;
});
console.log(someIsGreaterThenZero);