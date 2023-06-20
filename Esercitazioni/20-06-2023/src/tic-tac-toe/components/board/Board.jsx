import styles from './Board.module.css';

const Board = (props) => {
  return (
    <div className={styles.box}>
      <div>
        <h4 style={{ textAlign: 'center' }}>Utente selezionato: X / O</h4>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>X</div>
        <div data-disabled={true} className={styles.gridItem}></div>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}></div>
      </div>
      <div>
        <h3 style={{ textAlign: 'center' }}>Risultato: PAREGGIO / X / O</h3>
      </div>
    </div>
  )
}

export default Board;