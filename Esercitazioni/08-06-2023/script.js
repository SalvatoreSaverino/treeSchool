
(function () {
  console.clear();

  const lista = ["Pane", "Pasta", "Latte", "Olio"];
  const LISTA = [];

  // for (
  //   let index = 0; // situazione di inzio
  //   index > lista.length; // condizione di permanenza
  //   index++ // cosa avviene ad ogni ciclo
  // ) {
  //   // codice che viene eseguito ad ogni ciclo
  //   const elemento = lista.at(index);
  //   const elementUpper = elemento.toUpperCase();
  //   LISTA.push(elementUpper);
  // }

  for (const element of lista) {
    console.log(element);
    LISTA.push(element.toUpperCase());
  }

  console.log(LISTA);
})();

(function () {
  console.clear();
  const tipologie = ["Moto", "Auto"];
  const array = [
    ["Ducati", "Aprilia", "Honda", "Kawasaki", "MV Augusta"],
    ["Suzuki", "Fiat", "Opel", "Mercedes", "Ford"]
  ];

  for (let index = 0; index < array.length; index++) {
    // nel primo for sto leggendo gli elementi di array
    // [...Moto, ...Auto]
    // il for viene eseguito solo 2 volte
    const marche = array.at(index); // 0 -> [Aprilia, Ducati]
    const tipologia = tipologie.at(index); // Moto / Auto

    // console.log("index=", index); // 0
    // console.log("marche=", marche); // [Aprilia, Ducati, ...]
    // console.log("tipologia=", tipologia); // Moto

    console.log(tipologia, marche);

    // cmd + kc per commentare
    // alt/option + su/giù per spostare
    // alt/option + shift + su/giù per duplicare

    for (const marca of marche) {
      // entro dentro le singole marche: Aprilia
      console.log(tipologia, marca);
      // console.log("finito il for interno");
    }

    console.log("finito il for esterno");
  }
})();

(function () {
  console.clear();

  console.log(ciao);
  hello();

  // abbiamo l'hoisting per entrambi i casi;
  const ciao = "prova";
  function hello() {
    console.log("Hello! :)");
  }

  // function ti tipo void, non torna nulla ma esegue operazioni
  function sayHelloTo(name = "Mr. X") {
    // scrivere name come parametro è come aver scritto:
    // let name = QUELLO_CHE_MI_PASSANO_DA_FUORI;

    // Definire un valore di default nei parametri è come scrivere:
    // if(typeof name === 'undefined'){
    //   name = 'Mr. X'
    // }

    console.log(`Hello ${name}!`);
  }

  // const pippo = prompt("Come ti chiami?");
  // sayHelloTo(pippo);

  sayHelloTo("Daniele");
  sayHelloTo();

  // Function che ha valore di ritorno
  function somma(first = 0, second = 0) {
    return first + second;
  }

  const risultato = somma(3, 2);
  console.log("risultato", risultato);

  console.clear();
  
  // const dimmiTu = prompt("Dimmi una parola");
  // const DimmiTu = capitalize(dimmiTu);
  // console.log(DimmiTu);

  console.log(capitalize("luca")); // ->  Luca
  console.log(capitalize("pippo")); // -> Pippo
  console.log(capitalize("pluTo")); // -> PluTo
  console.log(capitalize(50)); // -> PluTo
});

// Proviamo a scrivere una function
function capitalize(word) {
  // torna la parola con la prima lettera maiuscola;
  
  // const firstChar = word.charAt(0).toUpperCase();
  // const otherChars = word.slice(1).toLowerCase();
  // return firstChar.concat(otherChars);
  
  // metodo alternativo
  // return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
  
  // Altro metodo
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalize("luca")); // ->  Luca
console.log(capitalize("pippo")); // -> Pippo
console.log(capitalize("pluTo")); // -> PluTo
console.log(capitalize("sANDRO")); // -> Sandro


// Proviamo a scrivere una function
function capitalize(word = "") {
  const wordIsString = typeof word === "string";
  const wordIsAtLeast2Char = word && word.length > 1;

  if (!wordIsString || !wordIsAtLeast2Char) {
    return ""; // il return blocca il codice sotto;
  }

  const firstChar = word.charAt(0);
  const firstCharUpper = firstChar.toUpperCase();
  const otherChars = word.slice(1);

  const output = firstCharUpper.concat(otherChars);

  // substring/slice + .at() + toUpperCase
  return output; // torna la parola con la prima lettera maiuscola;
}