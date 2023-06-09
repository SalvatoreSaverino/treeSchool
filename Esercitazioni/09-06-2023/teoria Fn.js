const user = "pippo";
console.log("user =", user);

(function () {
  // Questo da errore!
  // console.log("user =", user);

  const user = "pluto";

  console.log("user =", user);

  function func(a, b, c = "a") {
    console.log(user);
    console.log(a, b, c);
  }

  func("a", "b", "c");

  // funzione anonima
  const functInConst = function (a, b) {
    console.log(a, b);
  };

  // sto dichiarando una function e la sto richiamando subito dopo
  // self calling function
  (function () {
    // console.log("sono una self-calling function");
  })();
})();

// Funzione ricorsiva
(function () {
  // 5! -> 5 * 4 * 3 * 2 * 1 = 120;
  function factorialRecursive(number) {
    // 4
    if (number === 1) {
      return 1;
    }

    // (factorialRecursive(1) * 2) * 3;
    return factorialRecursive(number - 1) * number;
  }

  console.log(factorialRecursive(3));
});
  console.clear();

  // 1. una function può ritornare una function;
  // 2. una function può ricevere in parametro una function;

  // controllo se è una stringa e se ha 10 caratteri.
  // se vero torno true altrimenti torno false;
  const getIfIsStringWith10Chars = function (string = "") {
    const isString = typeof string === "string"; // true/false
    const isTenChars = string.length === 10; // true/false

    return isString && isTenChars; // boolean -> true/false
  };

  // validateFn([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  // validateFn({ length: 10 });
  console.log('controllo "abcdefghi"', getIfIsStringWith10Chars("abcdefghi"));
  console.log('controllo "abcdefghil"', getIfIsStringWith10Chars("abcdefghil"));

  const num = 10;

  function log(what) {
    console.log(what);

    if (typeof what === "function") {
      console.log(what());
    }
  }

  log(num); // dentro la func -> let what = num;
  log(getIfIsStringWith10Chars); // dentro la func -> let what = getIfIsStringWith10Chars;

  const a = getIfIsStringWith10Chars();
  log(a);

  // High order function -> functions che usano funzioni che vengono passate in parametro;
  function validateAndLog(dato, validateFn) {
    // come se... let validateFn = getIfIsStringWith10Chars

    // Arguments è un array che contiene tutti i parametri passati
    console.log("arguments=", arguments);

    // ricevere in input un dato da validare
    // ricevere in input una funzione che valida il dato
    // controllare se il dato è valido usando la function
    // stampare in console il risultato
    // console.log(dato, validateFn);
    const isValid = validateFn(dato);
    const result = isValid ? "valido" : "non valido";

    // let result;
    // if(isValid){
    //   result = 'valido';
    // }else{
    //   result = 'non valido';
    // }

    console.log(`Il dato "${dato}" è ${result}`);
  }

  validateAndLog("ciao", getIfIsStringWith10Chars);
  validateAndLog("abcdefghil", getIfIsStringWith10Chars);

  // esempio di function che usa arguments
  function joinStrings() {
    let phrase = "";
    console.log("arguments.length =", arguments.length);

    for (const parola of arguments) {
      phrase = phrase.concat(parola, " ");
    }

    // for (let index = 0; index < arguments.length; index++) {
    //   const pippo = arguments[index];
    //   phrase = phrase.concat(" ", pippo);
    //   // phrase = `${phrase} ${word}`;
    // }

    return phrase.trim();
  }

  console.log("stringa unita:");
  console.log(joinStrings("ciao", "mi", "chiamo", "Luca"));

  // Esercizio
  // scrivere due funzioni:

  // La prima accetta una parametro numerico un torna un booleano (true/false)
  // in base al fatto che il parametro sia divisibile per due o meno.

  // La seconda function accetta due parametri:
  // il primo è un numero
  // il secondo è la funzione a cui verrà passato il primo parametro.
  // eseguire la funzione del secondo parametro solo per numeri diversi da 0;
  // stampare a schermo il risultato della seconda function

  console.clear();

  function isEven(num) {
    return num % 2 === 0;
  }
  function isOdd(num) {
    // return !isEven(num);
    return num % 2 !== 0;
  }

  function validateNumber(number, validateFn) {
    if (number === 0) {
      console.error("Inserisci un numero diverso da zero");
      return;
    }

    if (typeof validateFn !== "function") {
      console.error("Inserisci una function valida");
      return;
    }

    const resultOfValidation = validateFn(number);

    if (resultOfValidation === true) {
      console.log("la validazione di " + number + " ha tornato true");
    } else {
      console.log("la validazione di " + number + " ha tornato false");
    }

    const testo = resultOfValidation ? "evviva!" : "oh no!";
    console.log(testo);
  }

  validateNumber(10, isEven); // è vero
  validateNumber(0, isEven); // torna messaggio di errore
  validateNumber(5, isEven); // non è vero
  validateNumber(5, isOdd); // non è vero
  validateNumber(10, isOdd); // non è vero
