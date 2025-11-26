import Signup from "../../modules/SignUp/Signup.jsx";
import styles from "./Register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.loginBg}>
      <h1 className={styles.title}>MOVI-SHOW</h1>
      <Signup />
    </div>
  );
};

export default RegisterPage;
