import Button from "../../shared/components/Button/Button";
import ButtonLogo from "../../shared/components/ButtonWithLog/ButtonWithLogo";
import Input from "../../shared/components/Input/Input";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import GoogleImg from "../../assets/icons/Google.svg";
import FacebookImg from "../../assets/icons/Facebook.svg";

const LoginPage = () => {
  return (
    <div className={styles.loginBg}>
      <h1 className={styles.title}>MOVI-SHOW</h1>

      <form className={styles.form}>
        <p>
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <Button type="submit">Sign In</Button>
        <div className={styles.or}>or continue with</div>

        <div className={styles.logoBtnRow}>
          <ButtonLogo href="https://accounts.google.com/">
            <img src={GoogleImg} alt="Google" className={styles.logoIcon} />{" "}
            Google
          </ButtonLogo>

          <ButtonLogo href="https://www.facebook.com/">
            <img src={FacebookImg} alt="Facebook" className={styles.logoIcon} />{" "}
            Facebook
          </ButtonLogo>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
