import styles from './Button.module.css';

const Button = ({ title, disabled = false, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled}>{title}</button>
  );
}

export default Button;