const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const output = document.getElementById("output");

// funzione genera Benvenuto nome cognome da input

function printInput() {
  output.innerHTML = `Benvenuto :  ${input1.value} ${input2.value} ☺️`;
}

// funzione genera colore di sfondo random
// function cambiaColore(colors) {
//       const coloreCasuale = colors[Math.floor(Math.random() * colors.length)];
//       document.body.style.backgroundColor = coloreCasuale;
//     }

// Creazione di un bottone per resettare il timer

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "gray",
  "lightblue",
];

let randomI = Math.floor(Math.random() * colors.length);
randomI = colors[randomI];

setTimeout(() => {
  document.body.style.backgroundColor = randomI;
}, "2000");

const reload = document.querySelector(".reload");

reload.addEventListener("click", function () {
  let randomI = Math.floor(Math.random() * colors.length);
  randomI = colors[randomI];
  setTimeout(() => {
    document.body.style.backgroundColor = randomI;
  }, "1000");
});

// Crea Todo List

// Funzione per aggiungere un'attività alla lista
function aggiungiAttivita() {
  const input = document.getElementById("input");
  const valoreInput = input.value.trim();

  // Verifica se il testo contiene più di tre parole
  const parole = valoreInput.split(" ");
  if (parole.length > 3) {
    alert("L'attività non può contenere più di tre parole");
    return;
  }

  // Verifica se il numero di task supera 10
  const lista = document.getElementById("listaAttivita");
  if (lista.children.length >= 10) {
    alert("Hai raggiunto il limite massimo di task");
    return;
  }

  // Verifica se l'attività è già presente nella lista
  const taskPresenti = Array.from(lista.children).map(
    (elemento) => elemento.textContent
  );
  if (taskPresenti.includes(valoreInput)) {
    alert("Questa attività è già presente nella lista");
    return;
  }

  if (valoreInput !== "") {
    const nuovoElemento = document.createElement("li");
    nuovoElemento.textContent = valoreInput;
    lista.appendChild(nuovoElemento);
    input.value = "";
  }
}

// Funzione per eliminare tutte le attività dalla lista
function eliminaTutti() {
  const lista = document.getElementById("listaAttivita");
  lista.innerHTML = "";
}

// Aggiungi l'evento al bottone "Aggiungi"
const bottoneAggiungi = document.getElementById("aggiungi");
bottoneAggiungi.addEventListener("click", aggiungiAttivita);

// Aggiungi l'evento al bottone "Elimina tutti"
const bottoneEliminaTutti = document.getElementById("eliminaTutti");
bottoneEliminaTutti.addEventListener("click", eliminaTutti);
