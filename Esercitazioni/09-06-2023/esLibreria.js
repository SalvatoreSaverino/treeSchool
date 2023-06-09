function libro(n,autore,letto,dataPubblicazione,capitoli){
    this.nome = n;
    this.autore = autore;
    this.dataPubblicazione = dataPubblicazione;
    this.letto = letto;
    this.dataPubblicazione = dataPubblicazione;
    this.capitoli = capitoli;

    this.numeroTotaleDiPagine = function(){
        let sommaPagine = 0;
        for(let capitolo of this.capitoli){
            // capitolo[0] = il capitolo; capitolo[1] è il numero di pagine
            sommaPagine += capitolo[1];
        }
        return sommaPagine;
    }
}

let libro1 = new libro("Pinocchio","Collodi",true,new Date(2018,1,12),[[1,2],[2,4],[3,5]]);
let libro2 = new libro("Cuore","De Amicis",true,new Date(1999,6,22),[[1,43],[2,14],[3,15]]);
let libro3 = new libro("Tre metri sopra il cielo","Moccia",true,new Date(2013,1,12),[[1,53],[2,41],[3,15]]);
let libro4 = new libro("I promessi sposi","Manzoni",true,new Date(2018,1,12),[[1,2],[2,4],[3,5]]);
let libro5 = new libro("Cambiare senza paura","Roberto Re",true,new Date(2019,8,18),[[1,3],[2,1],[3,5]]);

let libreria = new Array(libro1,libro2); //,libro3,libro4,libro5);

for(let libro of libreria){
    console.log(libro.autore);
}

// contare tutti i libri di autori che iniziano per M
let contatore = 0;
for(let i = 0; i < libreria.length; i++){
    if(libreria[i].autore.toLowerCase().startsWith("m")){
        contatore++;
    }
}
console.log("Il numero totale di libri è:" , contatore);

// contare il numero di pagine dei libri
let contaPagine = 0;
for(let i = 0; i < libreria.length; i++){
    let libro = libreria[i];
    contaPagine += libro.numeroTotaleDiPagine();
}
console.log(contaPagine);


// aggiorno il valore letto al suo apposto
for(let i = 0; i < libreria.length; i++){ 
    libreria[i].letto = !libreria[i].letto; 
}
console.log(libreria);