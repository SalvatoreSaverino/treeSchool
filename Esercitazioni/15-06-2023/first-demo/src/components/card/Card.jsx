import React from "react";
import styles from './Card.module.css';

// CLASSE
// STILE
// CLASSI MODULI

const Card = (props) => {


  return (
    <div className={styles.prova}>
      <div>
        {props.nome} {props.cognome}
      </div>
    </div>
  );
}

export default Card;