// Dato il seguente array [3,1,40,12,42,100,431,76,4,9]. Creare dei bottoni che al click scatenano un evento.
//     Il primo bottone mostra un messaggio con la somma.
//     Il secondo trova il numero maggiore e lo visualizza in console.
//     Il terzo trova il numero più piccolo e lo visualizza in console.
//     Il quarto sceglie un numero casuale, lo triplica e lo visualizza in console.
//     Il quinto bottone mostra un messaggio con la somma tutti i numeri pari.


// Creare una pagina con un div che contiene un paragrafo con scritto «Hello Word!». Implementare in js: un metodo che:
// cambia colore al testo (da nero a blu)
// converte la scritta in «Ciao mondo»
// cambia le dimensioni del testo a 24px.

// function changeText(){
//     let el = document.querySelector("p");
//     el.style.color = "gray";
//     el.style.fontFamily = "Arial"; 
//     console.log(el.innerHTML);
//     el.innerHTML = "Ciao Mondo!";

// }
// <!DOCTYPE html>
// <html>
//     <body> 
//          <div>
//             <p onclick="changeText()">
//                 Hello Word!
//             </p>
//          </div>
//         <script src="lezione4.js"></script>
//     </body>
// </html>
const arr = [3,1,40,12,42,100,431,76,4,9];
console.log("Ciao");
document.querySelector("h2").innerHTML =`Dato un insieme di numeri : ${arr}`;
document.querySelector("h3").innerHTML =`clicca sui bottoni e scopri i risultati`;

function sum(){
    let result=0
    for (let i = 0; i < arr.length; i++){
    result += arr[i];
    }return result;
 }
console.log(sum());

function greaterThan(){
return Math.max(...arr);
}

console.log(greaterThan());

function lessThan(){
    const minNumber = Math.min(...arr);
    return minNumber;
}
console.log(lessThan());