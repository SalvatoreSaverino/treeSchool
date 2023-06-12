// Ecco alcuni esercizi che puoi provare con gli array:

// Calcolo della somma degli elementi:
// Scrivi una funzione che prende in input un array di numeri e calcola la somma di tutti gli elementi.

function calcolaSomma(array) {
  let somma = 0;
  for (const elemento of array) {
    somma += elemento;
  }
  return somma;
}
const arr1 = [1, 2, 3, 4, 5];
const risultato = calcolaSomma(arr1);
console.log(risultato); // Output: 15
// Ad esempio, dato l'array [1, 2, 3, 4, 5], la funzione dovrebbe restituire il valore 15.

// Ricerca del valore massimo:
// Scrivi una funzione che prende in input un array di numeri e restituisce il valore massimo presente nell'array.
function calcolaMassimo(array) {
  return Math.max(...array);
}
const arr2 = [10, 5, 8, 14, 3];
console.log(calcolaMassimo(arr2));
// Ad esempio, dato l'array [10, 5, 8, 14, 3], la funzione dovrebbe restituire il valore 14.

// Filtraggio degli elementi pari:
// Scrivi una funzione che prende in input un array di numeri e restituisce un nuovo array contenente solo gli elementi pari dell'array originale.
function filtraPari(array) {
  const arrFiltered = [];
  for (const i of array) {
    if (i % 2 === 0) { arrFiltered.push(i)}
  }return arrFiltered;
}

const arr3 = [1, 2, 3, 4, 5, 6];
console.log(filtraPari(arr3));
// Ad esempio, dato l'array [1, 2, 3, 4, 5, 6], la funzione dovrebbe restituire l'array [2, 4, 6].



// Ricerca di un elemento:
// Scrivi una funzione che prende in input un array e un valore di ricerca, e restituisce true se il valore è presente nell'array, altrimenti restituisce false.
function ricercaElemento(array, valore) {
    return array.includes(valore);
  }
  
  const arr4 = [10, 20, 30, 40, 50];
  const valoreDiRicerca = 30;
  console.log(ricercaElemento(arr4, valoreDiRicerca)); // Output: true
// Ad esempio, dato l'array [10, 20, 30, 40, 50] e il valore di ricerca 30, la funzione dovrebbe restituire true.



// Inversione dell'ordine degli elementi:
// Scrivi una funzione che prende in input un array e restituisce un nuovo array con gli elementi invertiti rispetto all'ordine originale.

const invertArr =(array)=>array.reverse();
console.log(invertArr(arr1));
// Ad esempio, dato l'array [1, 2, 3, 4, 5], la funzione dovrebbe restituire l'array [5, 4, 3, 2, 1].
