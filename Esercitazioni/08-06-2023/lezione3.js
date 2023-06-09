/*
Esercizi
1) Dati i due numeri 9 e 11. Stampare la loro somma.
2) Data la stringa "il mio primo esercizio in Javascript " stamparla con tutti i caratteri maiuscoli
3) Data la stringa Javascript è case sensitive" stamparne la lunghezza
4) Data la stringa "Italia" stampare il primo e l'ultimo carattere
5) Date due stringhe "Roma" e "Catania " sommare le loro lunghezze
6) Data la stringa "Pizza" stampare la SOTTOSTRINGA che va dal secondo carattere fino alla fine della stringa
7) Data la stringa "JavaScript mi piace molto"
- Estrarre la lunghezza della stringa
- Estrarre l'indice di partenza della sottostringa "mi ...";
- Utilizzare i due numeri per calcolare l area di un rettangolo
8) Dati tre numeri (a=11;b=3;c=2 ), trovare il resto della divisione tra le variabili "a" e "b" e stampare se è maggiore 
o minore della variabile "c".
9) Date due stringhe (Filo e Ponte) sostituire i primi due caratteri della prima stringa con i primi due caratteri della seconda stringa.
*/

// esercizio 1 -- Dati i due numeri 9 e 11. Stampare la loro somma.
let numeroA = 9;  
let numeroB = 11; 
console.log(numeroA + numeroB);

// esercizio 2 -- Data la stringa "il mio primo esercizio in Javascript " stamparla con tutti i caratteri maiuscoli
let stringaA = "il mio primo esercizio in Javascript ";
console.log(stringaA.toUpperCase());

// esercizio 3 -- Data la stringa Javascript è case sensitive" stamparne la lunghezza
let stringaB = "Javascript è case sensitive";
let lunghezzaB = stringaB.length;
console.log("LA LUNGHEZZA E'::",lunghezzaB);

// esercizio 4  -- Data la stringa "Italia" stampare il primo e l'ultimo carattere
let stringaC = "Italia";
// 1) metodo
console.log(stringaC.charAt(0));
console.log(stringaC.charAt(stringaC.length-1));
// 2) metodo
console.log(stringaC[0]);
console.log(stringaC[stringaC.length-1]);
// 3) metodo
console.log(stringaC.substring(0,1));  // str.substring(1,0);
console.log(stringaC.substring(stringaC.length-1,stringaC.length));
// 4) metodo
console.log(stringaC.slice(0,1)); // slice(1,0) --> ""
console.log(stringaC.slice(stringaC.length-1,stringaC.length));


// esercizio 5 --> Date due stringhe "Roma" e "Catania " sommare le loro lunghezze
let str1 = "Roma";
let str2 = "Catania";
let lungh1 = str1.length;
let lungh2 = str2.length;
let somma = lungh1 + lungh2;
console.log(somma);
// console.log( str1.length + str2.length);

// esercizio 6 --> Data la stringa "Pizza" stampare la SOTTOSTRINGA che va dal secondo carattere fino alla fine della stringa
let stringaPiz = "Pizza";
// 1) metodo
let caratteri = stringaPiz.substring(1); // dal 1 alla fine della stringa
console.log(caratteri);
// 2) metodo
let caratteri2 = stringaPiz.substring(1, stringaPiz.length);
console.log(caratteri2);  

// esercizio 7
/**
 * 7) Data la stringa "JavaScript mi piace molto"
    - Estrarre la lunghezza della stringa
    - Estrarre l'indice di partenza della sottostringa "m ...";
    - Utilizzare i due numeri per calcolare l area di un rettangolo
 */
let p = "JavaScript mi piace molto";
let lunghezzaP = p.length;  // Estrarre la lunghezza della stringa
let indice = p.indexOf("m"); // Estrarre l'indice di partenza della sottostringa "mi ...";
let area = lunghezzaP * indice; // Utilizzare i due numeri per calcolare l’area di un rettangolo.
console.log(area);

// esercizio 8
/**
 * 8) Dati tre numeri (a=11;b=3;c=2 ), trovare il resto della divisione tra le variabili 
 * "a" e "b" e stampare se è maggiore 
o minore della variabile "c".
 */
let aq = 11, bq = 3, cq = 2;
let resto = aq % bq;
console.log(resto);
switch(true){
    case (resto <= cq):{
        console.log("IL RESTO E' MINORE o UGUALE");
        break;
    }
    case (resto > cq):{
        console.log("IL RESTO E' MAGGIORE");
        break;
    }
    default:{
        console.log("Valori non validi");
        break;
    }
} 

// esercizio 9
/**
 * Date due stringhe (Filo e Ponte) sostituire i primi due caratteri 
 * della prima stringa con i primi due caratteri della seconda stringa
 */
let stringaF = "Filo";
let stringaP = "Ponte";
// 1) metodo 
let prendoDueCaratteri = stringaP.charAt(0) + stringaP.charAt(1);
// 2) metodo
let prendoDueCaratteri2 = stringaP.substring(0,2);
// 3) metodo 
let prendoDueCaratteri3 = stringaP.slice(0,2);

// prelevo le prime due di stringaF
let prendoDueCaratteriA = stringaF.substring(0,2);

// sostituisco i valori
let sostituisci = stringaF.replace(prendoDueCaratteriA, prendoDueCaratteri);
console.log(sostituisci);

// metodo alternativo
let nuovaStringa = stringaP.substring(0,2).concat(stringaF.substring(2));
console.log(nuovaStringa);



/*
let prova = " esem pio Str inga ";
console.log(prova.replace(" ",""));
console.log(prova.replaceAll("e","E"));
*/