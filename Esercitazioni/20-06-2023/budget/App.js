import "./App.css";
import Button from "./components/button/Button";
import Viewer from "./components/viewer/Viewer";
import List from "./components/list/List";
import { useState } from "react";

function App() {
  const [budget, setBudget] = useState(100);
  const [list, setList] = useState([]);
  const articoli = [
    { title: "latte", price: 10 },
    { title: "pane", price: 20 },
    { title: "olio", price: 20 },
    { title: "biscotti", price: 30 },
    { title: "sale", price: 20 },
    { title: "zucchero", price: 20 },
  ];
  return (
    <div>
      <Viewer budget={budget} />
      {articoli.map((el, i) => {
        return (
          <Button
            key={i}
            title={el.title}
            price={el.price}
            budget={budget}
            setBudget={setBudget}
            setList={setList}
          />
        );
      })}

      <List list={list} setList={setList} />
    </div>
  );
}

export default App;
