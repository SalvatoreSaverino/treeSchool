import { useState } from "react";
import Button from "./components/button/Button";
import Testo from "./components/testo/Testo";
import { NUMERO } from "./utility/constants";
import {getMillisecondsBySeconds} from './utility/utils';

const App = () => {
  const [valore, setValore] = useState(0);

  function handleAdd() {
    setValore((prevState) => {
      if (prevState + NUMERO >= 100) {
        return 100;
      }
      return prevState + NUMERO;
    });
  }

  function handleSubtract() {
    setValore((prevState) => {
      if (prevState - NUMERO <= 0) {
        return 0;
      }
      return prevState - NUMERO;
    });
  }

  // const a = [1, 2, 3, 4, 5, 6]
  // console.log([...a])
  //
  // const obj = { asdasd: "Nuovo Nome", asifbia: 1 };
  // console.log(obj);
  // console.log({ ...obj });
  //
  // const obj2 = { ...obj };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/*<Button {...obj} />*/}
      <Button nome="Sottrai" onClick={handleSubtract} />
      <Testo valore={valore} />
      <Button nome="Aggiungi" onClick={handleAdd} />
    </div>
  );
};

export default App;
