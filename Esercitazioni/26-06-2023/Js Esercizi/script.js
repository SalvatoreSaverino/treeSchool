//Esercizio 1
// L’utente inserisce due numeri in successione con due prompt
// Il software stampa il maggiore

// const num1 =prompt("Inserisci primo numero:")
// const num2 =prompt("Inserisci secondo numero:");
// parseFloat(num1,num2);
// const maggiore = console.log(`Il maggiore è:` , Math.max(num1,num2));

// Esercizio 2
// L’utente inserisce due parole
// Il nostro codice
// Stampa prima la parola più corta
// Poi la più lunga

const parola1 = prompt("Inserisci parola");
const parola2 = prompt("Inserisci altra parola");

parola1.length < parola2.length
  ? console.log(parola1, parola2)
  : console.log(parola2,parola1);
