import React, { useEffect } from 'react';
import './Loader.css';

// class Loader extends React.Component {
//
//   componentDidMount() {
//     console.log('loader.JS - MONTATO')
//   }
//
//   componentWillUnmount() {
//     console.log('loader.JS - SMONTATO')
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('loader.JS - AGGIORNATO')
//   }
//
//   // shouldComponentUpdate(nextProps, nextState, nextContext) {
//   //   console.log('loader.JS - DOVREI AGGIORNARE?')
//   //   return true;
//   // }
//
//   render() {
//     return (
//       <div className="lds-ellipsis">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     );
//   }
// }

const Loader = ({ title }) => {

  // useEffect(() => {
  //   console.log('LOADER - montato');
  //
  //   return () => {
  //     console.log('LOADER - non più montato');
  //   }
  // }, []);

  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;