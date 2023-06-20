import { useState } from 'react';

import Board from "./components/board/Board";
import Toolbar from "./components/toolbar/Toolbar";

import styles from "./App.module.css";

const App = () => {
  const [player, setPlayer] = useState(0);
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const [status, setStatus] = useState({
    started: false,
    ended: false,
    winner: null
  });

  return (
    <div className={styles.mainView}>
      <Board />
      <Toolbar status={status} setStatus={setStatus} setBoard={setBoard} />
    </div>
  );
}

export default App;