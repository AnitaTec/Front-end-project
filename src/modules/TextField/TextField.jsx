import { useId } from "react";
import styles from "./TextField.module.css";

const TextField = ({ label, type = "text", placeholder }) => {
  const id = useId();

  return (
    <div>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder || ""}
        id={id}
        className={styles.field}
      />
    </div>
  );
};

export default TextField;
