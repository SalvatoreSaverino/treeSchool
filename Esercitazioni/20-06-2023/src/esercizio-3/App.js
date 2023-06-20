import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Loader } from './components' // 1


// class App extends React.Component {
//   state = {
//     componentShowed: 2
//   }
//
//   handleClick = () => {
//     this.setState((prevState) => {
//       if (prevState.componentShowed === 1) {
//         return {...prevState, componentShowed: 2};
//       }
//       return {...prevState, componentShowed: 1};
//     });
//   }
//
//   componentDidMount() {
//     console.log('app.JS - MONTATO')
//   }
//
//   componentWillUnmount() {
//     console.log('app.JS - SMONTATO')
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('app.JS - AGGIORNATO')
//   }
//
//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     console.log('app.JS - DOVREI AGGIORNARE?')
//     return false;
//   }
//
//   // hooks
//
//   render() {
//     return (
//       <>
//         {this.state.componentShowed === 1 ? (
//             <Loader title={"Caricamento in corso..."} />
//           ) :
//           null
//         }
//         <Button
//           title={this.state.componentShowed === 1 ? "Mostra 2" : "Mostra 1"}
//           handleClick={this.handleClick}
//         />
//       </>
//     );
//   }
// }

const App = () => {
  const [componentShowed, setComponentShowed] = useState(2); // 1, 2
  const [loading, setLoading] = useState(false);

  /*
  * Gli effetti vengono scatenati in base alle dipendenze (cioè al loro cambiamento)
  * Quando non ci sono dipendenze (cioè []), stiamo creando un "componentDidMount"
  * cioè l'effetto viene eseguito al primo render
  *
  * Quando ci sono dipendenze, l'effetto si scatena quando il valore di una o piu dipendenze cambia
  * simulando quello che era il "componentDidUpdate"
  *
  *
  * */
  // useEffect(() => {
  //   console.log("MOUNTED")
  // }, []);
  //
  //
  // useEffect(() => {
  //   console.log("AGGIORNATO - by componentShowed")
  // }, [componentShowed]);
  //
  //
  // useEffect(() => {
  //   console.log("AGGIORNATO - by loading")
  // }, [loading]);

  const handleClick = () => {
    setComponentShowed((prevState) => {
      if (prevState === 1) {
        return 2;
      }
      return 1;
    });
  }

  return (
    <>
      {componentShowed === 1 ? (
        <Loader title={"Caricamento in corso..."} />
      ) :
        null
      }
      <Button
        title={componentShowed === 1 ? "Mostra 2" : "Mostra 1"}
        handleClick={handleClick}
      />
    </>
  );
}

export default App;