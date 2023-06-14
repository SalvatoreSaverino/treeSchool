/*
* ----1) Collegate questo file a html
*
* ----2) Crea 3 button con 3 id diversi e per ciascuno assegnagli un event "click" (get Nome, set Età, get All)
*
* 3) Crea 3 funzioni:
*     la prima accetta come parametro un "nome" e restituisce una stringa composta da obj.welcomeMessage + nome
*     la seconda accetta come parametro un "età" e imposta il valore dell'eta dell'oggetto di cui sotto...
*     la terza restituisce entrambe le info di cui sopra messe insieme // 'Benvenuto Simone 29'
*
* 4) Fai eseguire ai rispettivi button le rispettive funzioni
*
* PS: utilizza `${}`, il destructuring e le arrow functions per completare l'esercizio
*
*/


const obj = {
  welcomeMessage: 'Benvenuto',
  eta: 0
}

const _name = 'Sam';

const getName = (name) => `${obj.welcomeMessage} ${name}`;

const setEta = (eta) => {
  obj.eta = eta;
  console.log('Impostato valore di obj.eta con ', eta)
}

const getAll = () => `${getName(_name)} ${obj.eta}`;

document
  .getElementById('btn_1')
  .addEventListener('click', () => {
    console.log(getName(_name));
  });

document
  .getElementById('btn_2')
  .addEventListener('click', () => {
    setEta(37);
  });

document
  .getElementById('btn_3')
  .addEventListener('click', () => {
    console.log(getAll());
  });


// Good Luck!!!