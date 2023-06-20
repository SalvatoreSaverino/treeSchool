import React from "react";
import Button from '../button/Button'
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.prova}>
      <div>
        <div style={{
          border: '1px solid red',
          borderRadius: '12px'
        }}>
          {props.nome} {props.cognome}
        </div>
        <Button
          title="Login"
          handleClick={props.handleClick}
        />
      </div>
    </div>
  );
}

export default Card;