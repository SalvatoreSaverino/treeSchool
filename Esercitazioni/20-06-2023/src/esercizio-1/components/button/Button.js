import styles from './Button.module.css';

const Button = (props) => {
  return (
    <>
      <button
        className={styles.green}
        onClick={props.handleClick}
        // onClick={handleClick}
      >
        {props.title}
      </button>
    </>
  );
}

export default Button;