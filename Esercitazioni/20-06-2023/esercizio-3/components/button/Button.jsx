import { useEffect, useState } from 'react';

const getTitle = (title) => new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve(title);
  }, 3000);
});

const Button = ({ handleClick, title }) => {

  const [titleButton, setTitleButton] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const executeGetTitle = async () => {
      console.log('setto Loading a TRUE')
      setLoading(true)
      console.log('mando chiamata al server')
      const response = await getTitle('Server ha risposto!');
      console.log('ricevo risposta:', response)
      console.log('setto title con risposta: ', response)
      setTitleButton(response);
      console.log('setto Loading a FALSE')
      setLoading(false)
    }

    console.log('useEffect è partito')
    executeGetTitle().catch(() => {
    })

  }, []);


  return (
    <>
      {loading === true ? <p>Caricamento in corso...</p> : <button onClick={() => {
      }}>Titolo: {titleButton}</button>}
    </>
  );
}

export default Button;
