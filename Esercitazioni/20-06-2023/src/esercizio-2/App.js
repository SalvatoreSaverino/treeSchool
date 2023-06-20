import React from 'react';
import './App.css';
import foto1 from './images/foto.JPG';
import Card from "./components/card/Card";

function App() {

  const lista = [
    { nome: 'Simone', cognome: 'Mandaglio', foto: foto1 },
    { nome: 'Andrea', cognome: 'Maestro', foto: foto1 },
    { nome: 'Luca', cognome: 'Abete', foto: foto1 },
  ];

  return (
    <>
      {lista.map((el, i) => {
        console.log('lista[i]', lista[i])
        console.log('el', el)
        return (
          <Card
            key={i}
            img={el.foto}
            name={el.nome}
            surname={el.cognome}
          />
        )
      })}
    </>
  )
}

export default App;