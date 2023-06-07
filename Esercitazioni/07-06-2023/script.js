import "./styles.css";

// sopra questo commento è da ignorare!
console.log("Ciao mondo!");

// Per scrivere un codice qualsiasi abbiamo bisogno di 3 cose:
// 1. riuscire a salvare un dato in memoria e fare piccole operazioni;
// 2. Avere una struttura condizionale
// 3. eseguire cicli operativi su struttura

// Variabili
// sono alias che rappresentano in modo riconoscibile una particolare
// allocazione di memoria;

// var  -> la keyword che identifica la definizione di una variable
// name -> nome della variabile che potrò usare per richiamare/usare il valore a lei assegnata
// =    -> operatore di assegnazione
// "Pippo" -> stringa che voglio assegnare alla mia variable;
// ; -> viene usato per separare una linea dall'altra
var name = "Pippo";

// Prima dichiaro e dopo assegno;
var lastName; // dichiarare una variable è vuota
lastName = "Pluto"; // assegnazione di valore;

// alt + shift + giù
console.clear();
console.info("Stampo il nome");
console.log(name);
console.warn("Stampo il cognome");
console.log(lastName);

// Modi per dichiarare una variable:

// Var -> Riassegnabile, modificabile
console.clear();

console.log(typeof "Ciao");
console.log(typeof 14);
console.log(typeof "14");

console.log("#######");

console.log(typeof isolaCheNonCe);
console.log(typeof varVariable);

var varVariable = 1; // assegno un valore numerico "1"
console.log("valore varVariable");
console.log(varVariable);
console.log(typeof varVariable); // typeof ci torna il tipo di valore dentro una variabile/valore

varVariable = 2;
console.log("valore varVariable");
console.log(varVariable);

varVariable = "Ciao";
console.log("valore varVariable");
console.log(varVariable);
console.log(typeof varVariable); // typeof ci torna il tipo di valore dentro una variabile/valore

// Let -> riassegnabile e modificabile
console.clear();

console.log(letVariable);

let letVariable = "prova"; // assegnazione
console.log(letVariable);

letVariable = "nuovoValore"; // riassegnazione
console.log(letVariable);

// Const -> non è riassegnabile, ma è `modificabile`
const constVariable = "prova";
console.log(constVariable);

// constVariable = "nuovoValore";

// ---- NaN
console.clear();
const value = Number("ciao");
console.log(value);
console.log(typeof value);

const number = 12;
const string = String(number);
console.log(string);
console.log(typeof string);

console.log("4" ** 2);

// Boolean();
console.log("12" === 12);

// --- String
let saluto = "Ciao";
const stringa = `${saluto}
persona!`; // backtick

console.log(stringa);

saluto = "Salve";

console.log(saluto);
console.log(stringa);

// -- Prompt
console.clear();
const userInput = "abc"; // prompt("Cosa vuoi dirmi?"); // prompt inserirà nella mia variabile o la risposta o "null";
const dueStringhe = "prima parte" + " " + "seconda parte"; // il "+" si chiama operatore di concatenamento

console.log("userInput:", userInput);
console.log("typeof userInput", typeof userInput);

const typeOfInput = typeof userInput;

// if (typeOfInput === "string") console.log("ciao");

if (typeOfInput === "string") {
  const prefix = "L'utente ha digitato ";
  console.log("prefix.length:", prefix.length);
  // const message = prefix + userInput; // concatenazione con il +
  // const message = prefix.concat(userInput); // concatenazione con il .concat()
  const message = `${prefix} : ${userInput}`; // concatenazione in es6

  console.log(message);
}

console.clear();

// Alcuni metodi di stringhe numbers
const myName = "luca";
const firstChar = myName.charAt(0); // prendiamo il primo carattere
console.log("firstChar:", firstChar);

const otherChars = myName.substring(1); // prendiamo gli altri caratteri
console.log("otherChars:", otherChars);

const firstCharToUpper = firstChar.toUpperCase();

const output = firstCharToUpper.concat(otherChars);
console.log("output:", output);

// Array / Obj
console.clear();

(function () {
  const string = "sono una stringa"; // valore

  if (string === "sono una stringa") {
    console.log("Luca aveva ragione");
  }

  // Come si definisce un Obj
  let teacher = {
    firstName: "Luca", // chiave (firstName) e valore (Luca)
    lastName: "Pagliaro", // chiave (lastName) e valore (Pagliaro)
    age: 28, // chiave (age) e valore (28)
    skills: ["JavaScript", "HTML", "CSS"],
    address: {
      city: "Catania"
    }
  };
  let insegnante = teacher; // referenza
  // unico modo per ottenere una copia per valore: structuredClone(teacher)

  insegnante.age = 35;

  console.log("teacher", teacher);
  console.log("insegnante", insegnante);

  // Comparazione tra OBJ non avviene per valore, ma solo per indirizzo o referenza
  // const teacherCopy = {
  //   firstName: "Luca",
  //   lastName: "Pagliaro",
  //   age: 28
  // };

  // if (teacher === insegnante) {
  //   console.log("i due obj sono uguali");
  // } else {
  //   console.log("i due obj NON sono uguali");
  // }

  // Array

  const array = ["Razvan", "Costanza", "Ali", "Daniele", "Nicola"];
  console.log(typeof array);

  // Come accedere/modificare elementi di un array/obj
  console.clear();
  console.log(teacher);
  console.log(teacher.firstName);
  console.log(teacher["lastName"]);
  console.log(array[2], array[3]); // [X] che sta all'indirizzo/chiave X
  console.log("Città =", teacher.address.city);
  console.log("Prima skill =", teacher.skills.at(1));

  // togliere elementi?
  const arrayCopy = array; // copio la referenza
  console.log(array.toString());
  // 1. togliere l'ultimo elemento
  const lastEl = arrayCopy.pop();
  console.log(lastEl, array.toString());
  // 2. togliere il primo
  const firstEl = arrayCopy.shift(); // Non ottimizzato!! Usare con cautela.
  console.log(firstEl, array.toString());
  // 3. slice/splice
  const removed = arrayCopy.splice(1, 2); // partendo da indice 1 vogliamo togliere 2 elementi
  console.log(removed, array.toString());

  // aggiungere:
  array.unshift("Gianluca"); // unshift() -> ad indice 0
  array.push("Aurora"); // alla fine

  console.log(array.toString());

  // modificare ad indice
  console.log(array.toString());

  // Ciclare
  // ( CONDIZIONE DI INIZIO, CONDIZIONE DI Proseguo, CODICE PER OGNI ITERAZIONE )
  // Definiano una var con valore 0;
  // Vogliamo che la variabile sia inferiore alla lunghezza dell'array
  // Voglio che ad ogni giro index sia incrementato
  for (let index = 0; index < array.length; index = index + 1) {
    const name = array[index];
    console.log(index, name);
    console.log("Buon pranzo a ".concat(name));
  }
})();

(function () {
  console.clear();

  const array = ["Pane", "Pasta", "Olio", "Salsa", "Pianta di basilico"];
  console.log(array.length);

  // nel caso del for abbiamo:
  // - keyword "for"
  // - condizione da controllare tra ()
  //  - let i = 0; -> È una operazione che viene eseguita SOLO prima della 1° iterazione
  //  - i < array.length -> è la vera condizione per cui continua il loop. se false il loop si ferma.
  //  - indice++ -> cosa viene eseguito alla fine di ogni iterazione
  // - un blocco di codice definito tra {}
  //  che viene eseguito dopo il controllo della condizione
  for (let indice = 0; indice < array.length; indice++) {
    const currentItem = array[indice];
    console.log(currentItem);
  }

  // console.log("--- salto il primo e l'ultimo");
  // for (let indice = 1; indice < array.length - 1; indice += 1) {
  //   const currentItem = array[indice];
  //   console.log(currentItem);
  // }

  // iteriamo sul valore dell'array
  console.log("--- For...of");
  for (let currentItem of array) {
    console.log(currentItem);
  }

  // iteriamo sull'indice dell'array
  console.log("--- For...in");
  for (let currentIndex in array) {
    // console.log("Hai aggiunto " + ++currentIndex + " elementi alla spesa");
    console.log(`Hai aggiunto ${++currentIndex} elementi alla spesa`);
  }

  // Break e continue;
  console.clear();
  // const itemToFind = "Olio";
  const itemsToFind = ["Olio", "Pane"];

  for (let indice = 0; indice < array.length; indice++) {
    const currentItem = array[indice];

    // Vogliamo non citare solo l'Olio
    if (itemsToFind.includes(currentItem)) {
      // Se ("Olio" o "Pane") === currentItem
      console.log("ti ho beccato " + currentItem);
      continue; // blocca l'esecuzione del codice sottostante e passa all'iterazione successiva;
    }

    console.log(`Elemento corrente ${currentItem}, indice: ${indice}`);

    // Vogliamo fermare l'iterazione su "Olio"
    // if (currentItem === itemToFind) {
    //   console.log(`Ho trovato ${itemToFind}! Sta ad indice ${indice}`);
    //   break; // interrompe il ciclo nel punto in cui viene lanciato;
    // }
  }

  /* Scrivere il codice che permatta di:
  - Chiedere all'utente (prompt) per 4 volte (for) cosa deve comprare al market;
  - Salvare gli input dell'utente in una variabile (array);
  - Stampare in console la lista della spesa
  - S.G.: Chiedere all'utente se esiste qualcosa che è facoltativa tra gli item in lista
    - eseguire un loop togliendo l'elemento facoltativo (splice);
   */

  // tips:
  // eseguire un for per 4 volte e chiedere all'utente qualcosa tramite prompt;
  // salvare i dati dentro un array, che dobbiamo aver definito prima

  // let lista = [];

  // for (let index = 0; index < 4; index++) {
  //   const element = prompt("Cosa vorresti comprare?");

  //   if(typeof element === 'string'){
  //     lista.push(element);
  //   }
  // }
  // console.log(lista);

  console.clear();

  // chiedere all'utente quale elemento della lista vuole rimuovere
  // - chiedere l'elemento da togliere: indice / stringa
  // - fare un ciclo fino a trovare l'elemento e toglierlo usando lista.splice()
  // const lista = ["Pane", "Pasta", "Latte", "Olio"];
  // const cosaRimuovere = prompt("Cosa vuoi togliere?");

  // for (let index = 0; index < lista.length; index++) {
  //   const alimentoCorrente = lista[index];

  //   if (alimentoCorrente === cosaRimuovere) {
  //     lista.splice(index, 1);
  //   }
  // }

  // console.log(lista);

  /* Scrivere il codice che data un input numerico 
     dell'utente riesca a determinare il fattoriale di quel numero;

     5 -> 5 * 4 * 3 * 2 * 1 = 120;
     4 -> 4 * 3 * 2 * 1 = 24;
  */
  const input = prompt("Numero di cui calcore il fattoriale");
  const numberInput = Number(input);
  let output = 1;

  // partendo dal passato dall'utente eseguire un loop
  // che parte dal numero dato ed arriva ad 1,
  // ad ogni ciclo moltiplicare il nuovo valore calcolato

  for (let i = 1; i <= numberInput; i++) {
    console.log(i);
    output = numberInput * i;
  }

  // ...
  // ...

  console.log(output); // 5!
})();
