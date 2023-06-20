const Button = ({ title, money, price, setMoney, setList }) => {
    const onClick = () => {
      setMoney((prevState) => {
        return prevState - price;
      });
      setList((prevState) => {
        return [...prevState, title];
      });
    };
  
    return (
      <button disabled={price > money} onClick={onClick}>
        {title} ${price}
      </button>
    );
  };
  
  export default Button;