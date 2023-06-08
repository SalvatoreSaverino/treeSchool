/** *****************************************************
 * ********************* CICLI **************************
 * ******************************************************
 */
/**
 * Sommare 10 volte il numero 5  con un ciclo while 

    Definiamo una variabile a cui assegniamo il valore 100. Sottraiamo il numero 3 per 10 volte.

    Date due stringhe "Leone"  e "Leotta"  verificare se esistono lettere uguali ovvero stesso valore, stesso tipo (maiuscolo o minuscolo) e stessa posizione.

    Trovare i primi 15 numeri multipli di 3. Attenzione: utilizzare un solo ciclo; le variabili non devono essere create esternamente al ciclo.

    Stampare i primi 20 numeri pari (usare solo un ciclo). 
 */

// sommare 10 volte il numero 5 con un ciclo while
let somma = 0;
let ii = 0; 
while( ii< numeroIterazioni){
    somma = somma + 5;
    ii++; 
}
console.log("somma WHILE: " + somma );
 

//Esercizio: Definiamo una variabile a cui assegniamo il valore 100. Sottraiamo il numero 3 per 10 volte. 
var nuovaVariabile;
for (var i=0; i<10; i++) { // inizia con i = 0. Continua a iterare fino a che i è minore di 100. 
    //Ad ogni iterazione i viene incrementato di 1.
    if(i ==0){
        nuovaVariabile = 100;
    }
    nuovaVariabile = nuovaVariabile - 3; // ad ogni iterazione sottraggo 3 a nuovaVariabile
    //console.log("NR ITERAZIONE: "+ i);
    //console.log("NUOVO VALORE DI CENTO:"+ cento);  
};

  

//Esercizio: Date due stringhe "Leone"  e "Leotta"  verificare se esistono lettere uguali ovvero stesso valore, stesso tipo (maiuscolo o minuscolo) e stessa posizione.
var stringa1 = "Leone";
var stringa2 = "Leotta";

for(var i = 0; i < stringa1.length, i < stringa2.length; i++){ // inizializzo i a 0 ed incremento i di 1 ad ogni interazione. La condizione di uscita è che i deve essere minore sia della lunghezza della prima stringa e sia della lunghezza della seconda
    //console.log("CONFRONTO:" + stringa1.charAt(i) +" -- con "+ stringa2.charAt(i));
    if(stringa1.charAt(i) == stringa2.charAt(i)){
        console.log("le due lettere sono uguali:" + stringa1.charAt(i) + " " + stringa2.charAt(i));
    }
}

// Esercizio:
// Trovare i primi 15 numeri multipli di 3. Attenzione: 
// 1. utilizzare un solo ciclo; 
// 2. le variabili non devono essere create esternamente al ciclo

// primo metodo
function multiplo(){
    for(var y = 0,i =0; y <=15; y++,i=i+3){
        if(i == 0){
            console.log("multiplo di 3: " + 1);
        }
        else
            console.log("multiplo di 3: " + i);
    } 
}
console.log(multiplo()); 
 
// secondo metodo
function multiplo3(){
    for(i=0; i<=15; i++) {
        console.log(i*3);
    }
}
multiplo3();  
 


// Esercizio: Stampare i primi 20 numeri pari (usare solo un ciclo).
// primo metodo  
function numeriPari(){
    console.log('\nnumeri pari:')
    for(i=1, n=1; n<20; i++){
        if(i%2 == 0){
            console.log(n + ') ' + i);
            n++;
        }
    }
}
numeriPari();

// secondo metodo 
for(var i = 0; i < 20; i++){
    console.log(i*2);
}


/** *****************************************************
 * ********************* ARRAY **************************
 * ******************************************************
 */
/**
    Dato il seguente array ["gatto", "cane", "renna", "pinguino", "coccodrillo"]: 
    Stampare tutte le parole con doppie consonanti (ad esempio renna); 
    Aggiungere altri tre animali.
    Sommare tutte le lettere dell’array.

    Dato il seguente array [3,2,31,23,4]
    Visualizzare il primo e l’ultimo elemento.
    Aggiungere gli elemento 21,7,4;
    Stampare tutti i numeri pari;
    Eliminare l’elemento con valore 2.

    Dato l'array ["gatto", "cane", "renna", "pinguino", "coccodrillo"], stampare tutte le parole con almeno 4 consonanti.

    Dato un array di interi [1,3,6,14,7,2,50] invertire le posizioni.

    Data una matrice 4 x 4 composta da tutti zeri. Rendere la matrice triangolare superiore utilizzando la funzione Math.random()  
 */

/*** Esercizio:
 * Dato il seguente array ["gatto", "cane", "renna", "pinguino", "coccodrillo"]: 
 * Stampare tutte le parole con doppie consonanti (ad esempio renna); 
 * Aggiungere altri tre animali.
 * Sommare tutte le lettere dell’array.  
 */
let listWor = ["gatto","cane","renna","pinguino","coccodrillo"];
function verificoParola(parola){
    for(let i = 0; i < parola.length; i++){
        if(parola[i] == parola[i+1]){
            return true;
        }
    }
    return false;
}

for(let i = 0; i < listWor.length; i++){
    if(verificoParola(listWor[i])){ // se l'if restituisce true, doppie trovate
        console.log("find:" + listWor[i]);
    }
}

listWor.push("leone","canguro","topo");
console.log(listWor);

let contatoreLettere = 0;
for(let i = 0; i < listWor.length; i++){
    contatoreLettere += listWor[i].length;
}
console.log("la somma delle lettere e+ :" + contatoreLettere);
 

/***
 * Dato il seguente array [3,2,31,23,4]
 * Visualizzare il primo e l’ultimo elemento.
 * Aggiungere gli elemento 21,7,4;
 * Stampare tutti i numeri pari;
 * Eliminare l’elemento con valore 2. 
 */
let arrayEs1 = [3,2,31,23,4];
let primocarattere = arrayEs1[0];
let ultimocarattere = arrayEs1[arrayEs1.length-1]; // arrayEs1[4]
console.log(primocarattere, ultimocarattere);

// altro metodo
let primo=arrayEs1.slice(0,1);
let ultimo=arrayEs1.slice(arrayEs1.length-1,arrayEs1.length);
console.log("primo e ultimo: ", primo, ultimo); 


arrayEs1.push(21,7,4);

for(let i = 0; i < arrayEs1.length; i++){
    if(arrayEs1[i] % 2 == 0){ // se è pari
        console.log("Elemento:" + arrayEs1[i]);
    }
}

for(let i = 0; i < arrayEs1.length; i++){
    if(arrayEs1[i] == 2){
        arrayEs1.splice(i,1); //  arrayEs1.splice(i,1,100);
    }
}
arrayEs1.forEach(el => console.log(el))
// altro metodo
arrayEs1.splice(arrayEs1.indexOf(2), 1)
console.log (arrayEs1);


/* 
 * Dato l'array ["gatto", "cane", "renna", "pinguino", "coccodrillo"], stampare tutte le parole con almeno 4 consonanti. 
*/
let animali = ["gatto","cane","renna","pinguino","coccodrillo"];
let vocali = ['a','e','i','o','u'];

for(let i = 0; i < animali.length; i++){
    let contaConsonanti = 0;
    let animaleTmp = animali[i];
    for(let j = 0; j < animaleTmp.length; j++){ // controllo singolo animale salvato sulla variabile animaleTmp
        let carattere = animaleTmp.charAt(j);
        if( !(vocali.includes(carattere))){
            contaConsonanti++;
        }
    }
    if(contaConsonanti > 3){
        console.log("Parola con almeno 4 consonanti", animaleTmp, " - conta: ", contaConsonanti);
    }
}


/*
 * Dato un array di interi [1,3,6,14,7,2,50] invertire le posizioni
*/
let arrayReve = [1,3,6,14,7,2,50];
let nuovoArray = arrayReve.reverse();

/*
 * Data una matrice 4 x 4 composta da tutti zeri. Rendere la matrice triangolare superiore utilizzando la funzione Math.random()
*/
let matrice = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

for(let i = 0; i < matrice.length; i++){
    for(let j  = i; j < matrice[i].length; j++ ){
        matrice[i][j] = Math.floor(Math.random() * 100);
    }
}
console.log(matrice);

