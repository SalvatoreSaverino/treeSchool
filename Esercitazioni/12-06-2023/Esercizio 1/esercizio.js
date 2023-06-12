/** *****************************************************
 * ********************* OGGETTI **************************
 * ******************************************************
 */

/**
 * Creare una entità persona con nome Marco, cognome Rossi, età 32 anni. 
 * Creare un’altra entità persona con nome Francesca, cognome Leotta, età 34 anni. 
 * Stampare il nome e cognome della persona più anziana. 
 * Aggiungere ad ogni persona la proprietà sesso, rispettivamente M e F. 
 * Stampare le entità femminili. 
 */

let personaEse1 = {
    nome: "Marco",
    cognome: "Rossi",
    eta : 32,
    stampaNome : function(){
        console.log(this.nome +" - " +this.cognome );
    }
}
let personaEse2 = {
    nome: "Francesca",
    cognome: "Leotta",
    eta: 34,
    stampaNome : function(){
        console.log(this.nome +" - " +this.cognome );
    }
}

/**
 * function persona(nome, cognome, eta) {
        this.nome = nome,
        this.cognome = cognome,
        this.eta = eta,
        stampaNome : function(){
            console.log(this.nome +" - " +this.cognome );
        }
    } 
    let personaEse1 = new persona("Marco","Rossi",32);
    let personaEse2 = new persona("Francesca","Leotta",34);
 */

if(personaEse1.eta > personaEse2.eta){
    personaEse1.stampaNome();
    console.log("la piu anziana");
    //console.log(personaEse1.nome + "-"+ personaEse1.cognome + " è piu' anziana");
}
else{
    console.log(personaEse2.nome + "-"+ personaEse2.cognome + " è piu' anziana"); 
}

personaEse1.sesso = "M";
personaEse2.sesso = "F";

function sesso(personaDaVerificare){
    if(personaDaVerificare.sesso == 'F')
        personaDaVerificare.stampaNome();  
}

console.log("Stampo tutte le femmine");
sesso(personaEse1);
sesso(personaEse2);
 

/**
 * Creare una lista di oggetti auto. Ogni auto deve contenere: marca, modello (string), colore(string) e anno produzione(number).  
 * esempio: AUTO: bmw, 530, blu, 2021
 * - Stampare tutte le auto blu.
 * - Creare un nuovo array contenente tutti le auto con anno di produzione  > 2000. 
 */
function auto(marca, modello, colore, anno){
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
    this.anno = anno;
    this.mostraAuto = function(){
        console.log(this.marca + " " + this.modello);
    }
}
let listaAuto = [
    new auto("bmw", "530", "blu", 2021),
	new auto("audi", "A6", "grigia", 2020),
	new auto("mercedes", "c200", "blu", 1988),
	new auto("fiat", "126", "giallo", 1975),
	new auto("mazda", "rx8", "rossa", 2015),
	new auto("fiat", "panda", "bianca", 1985)
];
 
console.log("\n");
nuovoArray = [];
for(let oneAuto of listaAuto){  // for ( let nomeValore of nomeArray)
    if(oneAuto.colore == "blu"){
        oneAuto.mostraAuto();
    }
    if(oneAuto.anno > 2000){
        nuovoArray.push(oneAuto);
    }
}
console.log("\n");
console.log(nuovoArray);


// altro metodo
nuovoArray = [];
for(let i = 0; i < listaAuto.length; i++){
    if(listaAuto[i].colore == "blu"){
        listaAuto[i].mostraAuto();
    }
    if(listaAuto[i].anno > 2000){
        nuovoArray.push(listaAuto[i]);
    }
}


// altro metodo
let autoBlu = listaAuto.filter(auto => auto.colore === "blu");
console.log('Auto Blu:', autoBlu);
let auto2000 = listaAuto.filter(auto => auto.anno > 2000);
console.log('Auto +2000:', auto2000);
  


