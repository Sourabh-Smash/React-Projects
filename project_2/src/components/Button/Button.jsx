import styles from "./Button.module.css";

const Button = ({ isOutiine, icon, text, ...res }) => {
  return (
    <button
      {...res}
      className={isOutiine ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
