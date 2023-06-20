const List = ({ list, setList }) => {
  const handleRemove = (index) => {
    setList((prevState) => {
      const arr = [...prevState];
      arr.splice(index, 1)
      return arr;
    });
  }

  return (
    <>
      {list.length > 0 ? (
        <>
          {list.map((button, index) => (
            <div>
              <span key={index}>{button}</span>
              <button onClick={() => handleRemove(index)}>Elimina</button>
            </div>
          ))}
        </>
      ) : (
        <p>Nessun bottone selezionato</p>
      )}
    </>
  );
};

export default List;
