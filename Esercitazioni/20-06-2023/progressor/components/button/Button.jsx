const Button = ({ onClick, nome }) => {
  const style = { backgroundColor: "red" };

  return (
    <button style={style} onClick={onClick}>
      {nome}
    </button>
  );
};

export default Button;
