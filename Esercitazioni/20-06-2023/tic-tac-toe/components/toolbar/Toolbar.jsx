import Button from "../button/Button";
import styles from './Toolbar.module.css';
import { useState } from "react";

const Toolbar = ({ status, setStatus, setBoard }) => {
  const { started, ended, winner } = status;

  const [value, setValue] = useState('');

  console.log(value)

  const handleStart = () => {

    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);

    setStatus({
      started: true,
      ended: false,
      winner: null
    });

  };

  const handleReset = () => {

    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);

    setStatus({
      started: false,
      ended: false,
      winner: null
    });

  };

  return (
    <div className={styles.box}>
      <div>
        <Button title="X" disabled={started === true} />
        <Button title="O" disabled={started === true} />
      </div>

      <div>
        <Button title="Start" disabled={started === true} onClick={handleStart} />
      </div>

      <div>
        <Button title="Reset" disabled={started === false} onClick={handleReset} />
      </div>
      <div>
        <input type="text" value={value} onChange={(e) => {
          setValue(e.target.value)
        }} />
      </div>
    </div>
  )
}

export default Toolbar;