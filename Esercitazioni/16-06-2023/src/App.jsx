import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Lista from "./components/Lista";

function App() {
  const [money, setMoney] = useState(100);
  const [list, setList] = useState([]);

  return (
    <>
      <div>
        <Button
          title="Latte"
          price={5}
          money={money}
          setList={setList}
          setMoney={setMoney}
        />
        <Button
          title="Pane"
          price={3}
          money={money}
          setList={setList}
          setMoney={setMoney}
        />
        <Button
          title="Pasta"
          price={6}
          money={money}
          setList={setList}
          setMoney={setMoney}
        />
        <Button
          title="Patate"
          price={300}
          money={money}
          setList={setList}
          setMoney={setMoney}
        />
        <Button
          title="Cereali"
          price={8}
          money={money}
          setList={setList}
          setMoney={setMoney}
        />
        <Button
          title="Caffè"
          price={25}
          money={money}
          setList={setList}
          setMoney={setMoney}
        />
      </div>
      <Lista list={list}/>
    </>
  );
}

export default App;
