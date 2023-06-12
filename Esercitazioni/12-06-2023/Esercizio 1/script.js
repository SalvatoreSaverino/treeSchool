//1) Creare una entità persona con nome Marco, cognome Rossi, età32 anni.
//Creare un'altra entità persona con nome Francesca, cognome Leotta, età34 anni.
//Stampare il nome e cognome della persona più anziana.
//Aggiungere ad ogni persona la proprietà sesso, rispettivamente M e F. Stampare le entità femminili.

//2) Creare una lista di oggetti auto.
//Ogni auto deve contenere: marca, modello (string), colore(string) e anno produzione(number).
//AUTO: bmw, 530, blu, 2021
//AUTO: audi, A6, grigia, 2020
// AUTO: mercedes, c200, blu, 1988
// AUTO: fiat, 126, giallo, 1975
// AUTO: mazda, r×8, rossa, 2015
// AUTO: fiat, panda, bianca, 1985
// • Stampare tutte le auto blu.
// Creare un nuovo array contenente tutti le auto con anno di produzione > 2000.

function creaPerson(nome, cognome, eta) {
  (this.nome = nome), (this.cognome = cognome), (this.eta = eta);
}

const person1 = new creaPerson("Marco", "Rossi", 40);
console.log(person1);

const person2 = new creaPerson("Francesca", "Leotta", 34);
console.log(person2);

// const persona1 = {
//     nome: "Marco",
//     cognome : "Rossi",
//     eta : 32
// };

// const persona2 = {
//     nome: "Francesca",
//     cognome : "Leotta",
//     eta : 34
// };

const olderPerson = (person1, person2) => {
  person1.eta < person2.eta
    ? console.log(`${person2.nome} è più vecchio di ${person1.nome}`)
    : console.log(`${person1.nome} è più vecchio di ${person2.nome}`);
};
olderPerson(person1, person2);

person1.gender = "M";
person2.gender = "F";
console.log(person1);

person1.sesso === "F"
  ? console.log(person1.gender)
  : console.log(person2.gender);

const creaAuto = function (marca, modello, colore, annoProduzione) {
  (this.marca = marca),
    (this.modello = modello),
    (this.colore = colore),
    (this.annoProduzione = annoProduzione);
};

const auto1 = new creaAuto("BMW", "530", "blu", 2021);
const auto2 = new creaAuto("Audi", "A6", "grigia", 2020);
const auto3 = new creaAuto("Mercedes", "C200", "blu", 1988);
const auto4 = new creaAuto("Fiat", "126", "giallo", 1975);
const auto5 = new creaAuto("Mazda", "Rx8", "rossa", 2015);
const auto6 = new creaAuto("Fiat", "Panda", "bianca", 1985);

const concessionario = [auto1, auto2, auto3, auto4, auto5, auto6];
  let autoBlu= [];
  let autoOver2000= [];
for (const auto of concessionario) {
if (auto.colore==="blu"){ 
  autoBlu.push(auto);}
 if (auto.annoProduzione > 2000){
  autoOver2000.push(auto)}}
  console.log(`Le auto Blu sono : ${(autoBlu)}, mentre le auto con anno di produzione successivo al 2000 sono : ${autoOver2000}`);
