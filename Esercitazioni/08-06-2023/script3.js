// Scrivere una funzione saluto(time) che prende in input un intero (compreso tra 0 e 23) e visualizza un messaggio di saluto con scritto:
// Buongiorno (se compreso tra 0 e 12)
// Buon pomeriggio (se compreso tra 12 e le 19)
// Buonasera (se compreso tra le 19 e le 22)
// Buonanotte (se compreso tra le 22 e le 23)

// function saluto(time) {
//     if(time>0 && time<=12){
//       console.log("Buongiorno");
//     }else if (time>13 && time<=19){
//        console.log("Buon pomeriggio");
//     }else if(time>20 && time<=22){
//       console.log("Buonasera");
//     }else if(time==23){
//        console.log("Buonanotte")
//     }else console.log("Inserisci un valore tra 0 e 23");
// }

//  saluto (21);


// Dati i due numeri 9 e 11. Stampare la loro somma.
console.log(9+11);

// Data la stringa "il mio primo esercizio in Javascript" stamparla con tutti i caratteri maiuscoli
const str ="il mio primo esercizio in Javascript";
console.log(str.toUpperCase());

// Data la stringa "Javascript è case-sensitive"  stamparne la lunghezza
const str2 ="Javascript è case-sensitive";
console.log(str2.length);

// Data la stringa "Italia" stampare il primo e l'ultimo carattere
const str3= "Italia";
const firstChar= str3.charAt(0);
const lastChar = str3.charAt(str3.length-1);
console.log(firstChar, lastChar);

// Date due stringhe "Roma" e "Catania " sommare le loro lunghezze
const città1 = "Roma";
const città2 = "Catania";
lengthCittàTot = città1.length + città2.length;
console.log(lengthCittàTot);

// Data la stringa "Pizza" stampare la SOTTOSTRINGA che va dal secondo carattere fino alla fine della stringa
const cibo = "Pizza";
console.log(cibo.slice(1));

// Data la stringa "JavaScript mi piace molto" Estrarre la lunghezza della stringa
const str4 = "JavaScript mi piace molto";
const str5 = str4.length;
console.log(str5);
//  Estrarre l'indice di partenza della sottostringa "mi ...";
const str6 = str4.indexOf("mi");
console.log(str6);
//  Utilizzare i due numeri per calcolare l’area di un rettangolo.
function areaRett(a,b){
   const risult = a*b;
   console.log(risult);
}
areaRett(str5,str6);

// Dati tre numeri (a=11;b=3;c=2), trovare il resto della divisione tra le variabili "a" e "b" e stampare se è maggiore o meno della variabile "c". 
const a = 11;const b = 3;const c = 2;const resto = a % b;
(resto < c) ? console.log("il resto della divisione è minore di c") : console.log("il resto della divisione è maggiore di c");

// Date due stringhe (Filo e Ponte) sostituire i primi due caratteri della prima stringa con i primi due caratteri della seconda stringa
