const Button = ({ title, price, budget, setBudget, setList }) => {
  const handleClick = () => {
    if (budget >= price) {
      setBudget((prevState) => {
        return prevState - price;
      });
      setList((prevState) => {
        return [...prevState, title];
      });
    }
  };
  return (
    <button onClick={handleClick} disabled={price>budget}>
      {title} {price}
    </button>
  );
};

export default Button;
