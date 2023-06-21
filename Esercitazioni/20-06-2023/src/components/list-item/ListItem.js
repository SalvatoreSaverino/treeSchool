const Lista = ({ title, list }) => {
  return (
    <>
      <h1>CARRELLO</h1>
      <p>====================================</p>
      {list.map((el, i) => {
        return <p key={i}>{el}</p>;
      })}
    </>
  );
};
export default Lista;