const login = (valore) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (valore > 4) {
      reject('ERRORE: Il valore è maggiore di 4!')
    } else {
      resolve('SUCCESSO: Il valore è corretto!');
    }
  }, 2000);
});


// const a = 10;
//
// try {
//   console.log('eseguo 1')
//   console.log('eseguo 2')
//   // a = 5;
//   throw 'errore'
//   console.log('eseguo 3')
// } catch (exception) {
//   console.log('CATCH', exception)
// } finally {
//   console.log('finally')
// }

const onButtonClick = () => {
  console.log('Mostro LOADER');
  login(5)
    .then((res) => {
      console.log(res)
      console.log('Nascondo LOADER');
    })
    .catch((msg) => {
      console.log(msg)
      console.log('Nascondo LOADER');
    });
}

const onButtonClickNEW = async () => {
  console.log('Mostro LOADER');
  try {
    const risultato_della_promessa = await login(1);
    console.log(risultato_della_promessa)
  } catch(err) {
    console.log(err)
  }
}

document
  .getElementById('button')
  .addEventListener('click', async (event) => {
    event.preventDefault();

    await onButtonClickNEW();
  });


// nome, lv, exp

class Personaggio {

  constructor(nome, lv = 1, exp = 0) {
    this.nome = nome;
    this.lv = lv;
    this.exp = exp;
  }

  getLivello() {
    return this.lv;
  }

  setLivello(newLv) {
    this.lv = newLv;
  }

}

const p1 = new Personaggio('Simone', 10);
console.log(p1.getLivello()) // 10
p1.setLivello(11);
console.log(p1.getLivello()) // 11

const p2 = new Personaggio('Andrea');
console.log(p2.getLivello()) // 1
p2.setLivello(2);
console.log(p2.getLivello()) // 2


const personaggio1 = {
  nome: 'personaggio 1',
  lv: 1,
  exp: 0
}
const personaggio2 = {
  nome: 'personaggio 2',
  lv: 2,
  exp: 0
}
const personaggio3 = {
  nome: 'personaggio 2',
  lv: 3,
  exp: 0
}