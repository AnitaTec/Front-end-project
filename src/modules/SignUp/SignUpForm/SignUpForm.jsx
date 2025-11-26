import { useForm } from "react-hook-form";
import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/Button/Button";
import ButtonLogo from "../../../shared/components/ButtonWithLog/ButtonWithLogo";
import { Link } from "react-router-dom";
import GoogleImg from "../../../assets/icons/Google.svg";
import FacebookImg from "../../../assets/icons/Facebook.svg";
import styles from "./SignUpForm.module.css";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <p>
        Already a member? <Link to="/">Login</Link>
      </p>

      <Input
        label="Email"
        type="email"
        {...register("email", { required: "Email is required" })}
        placeholder="Email address"
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <Input
        label="Password"
        type="password"
        {...register("password", { required: "Password is required" })}
        placeholder="Password"
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}

      <Button type="submit">Join</Button>

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
  );
};

export default SignupForm;
