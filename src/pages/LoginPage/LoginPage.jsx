import Login from "../../modules/Login/Login.jsx";
import styles from "./Login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginBg}>
      <h1 className={styles.title}>MOVI-SHOW</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
