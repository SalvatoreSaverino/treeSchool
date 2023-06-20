import React from 'react';
import Card from './components/card/Card'
import './App.css';


function App() {
  return (
    <>
      <Card nome="Simone" cognome="Mandaglio" />
      <Card nome="Luca" cognome="Abete" />
      <Card nome="Alberto" cognome="Novara" />
      <Card nome="Giulia" cognome="Bianchi" />
    </>
  );
}

export default App;