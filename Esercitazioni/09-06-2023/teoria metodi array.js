// Data array = [1,2,3,45,6,77,8] moltiplicare tutti i numeri per 5 e inseriscilo su un nuovo array

let array = [1,2,3,45,6,77,8]

// MAP: esegue un operazione su un singolo elemento.
let array2 = [];
for(let i = 0; i < array.length; i++){
    array2.push(array[i] * 5);
} 
let arrayNuovo2 = array.map( x => x *5 );

// FILTER: fa un filtro sui dati creando una array

// Filtrare gli elementi compresi tra 7 e 2 e inserirli in una nuova array
let array3 = [];
for(let i = 0; i < array.length; i++){
    let el = array[i];
    if(el > 2 && el < 7){
        array3.push(el);
    }
}
console.log(array3);
let arrayFiltrato = array.filter(el => el > 2 && el < 7);
console.log(arrayFiltrato);


// REDUCE: estrae un risultato dall array che analizza. 
// sommiamo tutti gli elementi dell'array
let somma = 0;
for(let i = 0; i < array.length; i++){
    somma += array[i];
}
console.log(somma);

// let array = [1,2,3,45,6,77,8]
// reduce
let arrayReduce = array.reduce( ((a, b) => a+b ), 0);
console.log(arrayReduce);

// a = 0;
// 0 + 1 = 1 --> a
// a + b = 1 +2 = a --> 3
// a + b = 3 + 3 = a--> 6 
// a + b = 6 + 45 



// FOREACH: scorrere un array
array.forEach(
    el => console.log(el)
)

// FIND trova il primo in base ad una regola
//  il primo elemento maggiore di 18
let elemenFind;
for(let i = 0; i < array.length; i++){
    if(array[i] >= 18){
        elemenFind = array[i];
    } 
}

console.log(array.find(el => el >= 18));



