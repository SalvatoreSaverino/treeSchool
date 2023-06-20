import {
  TESTO_0_25,
  TESTO_26_50,
  TESTO_51_75,
  TESTO_76_99,
  TESTO_100,
} from "../../utility/constants";
import { useEffect, useState } from "react";

const Testo = ({ valore }) => {
  const [testoVisualizzato, setTestoVisualizzato] = useState(null);

  useEffect(() => {
    // console.log("ciao");
  }, [testoVisualizzato]);

  useEffect(() => {
    const getText = () => {
      if (valore >= 0 && valore <= 25) {
        return TESTO_0_25;
      } else if (valore >= 26 && valore <= 50) {
        return TESTO_26_50;
      } else if (valore >= 51 && valore <= 75) {
        return TESTO_51_75;
      } else if (valore >= 76 && valore <= 99) {
        return TESTO_76_99;
      } else {
        return TESTO_100;
      }
    };

    const nuovoTesto = getText();
    setTestoVisualizzato(nuovoTesto);
  }, [valore]);

  const getStyle = () => {
    return { display: "block" };
  };

  const getH1 = () => {
    return <h1>{valore} %</h1>;
  };

  return (
    <div style={getStyle()}>
      {getH1()}
      <h5>{testoVisualizzato}</h5>
    </div>
  );
};

export default Testo;
