import styles from "./ButtonLogo.module.css";

const ButtonLogo = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.buttonLogo}
    >
      {children}
    </a>
  );
};

export default ButtonLogo;
