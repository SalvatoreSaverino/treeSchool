import React, {useState} from 'react';
import Card from './components/card/Card'
import './App.css';

function App() {
  const [nome, setNome] = useState('Alba');

  function handleSetNome() {
    setNome((prevState) => prevState === 'Alba' ? 'Luca' : 'Alba');
    // setNome('valore')
  }

  return (
    <>
      <Card nome={nome} cognome="Mandaglio" handleClick={handleSetNome} />
      {/*<Card nome="Andrea" cognome="Mandaglio" />*/}
      {/*<Card nome="Simone" cognome="Mandaglio" />*/}
    </>
  );
}

export default App;