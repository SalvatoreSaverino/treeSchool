import { useState } from "react";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import ListItem from "./components/list-item/ListItem";

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    setList((prevState) => {
      return [...prevState, value];
    })
    setValue('');
  }

  return (
    <>
      <div>
        <Input value={value} setValue={setValue} />
        <Button title="Aggiungi" onClick={handleAddItem} />
      </div>
      <div>
        {list.map((el, i) => {
          return (
            <ListItem key={i} description={el} />
          );
        })}
      </div>
    </>
  );
}

export default App;