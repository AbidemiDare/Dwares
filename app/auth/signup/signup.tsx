import { ChangeEvent, useRef, useState, MouseEvent } from "react";
import style from "./signup.module.css";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaXmark } from "react-icons/fa6";

interface SignUpProps {
  handleSignUp: VoidFunction;
  sign: boolean;
}

interface inputField {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignUp: React.FC<SignUpProps> = ({ sign, handleSignUp }) => {
  const [inputField, setInputField] = useState<inputField>({});
  const [passwordVisible, setPasswordVisible] = useState({
    password: false,
    confirmPassword: false,
  });
  const removeClass = useRef<HTMLDivElement | null>(null);

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const name = event.target.name;
    const value = event.target.value;
    setInputField((values) => ({ ...values, [name]: value }));
  };

  const togglePasswordVisibility = (
    event: MouseEvent<HTMLButtonElement>,
    field: "password" | "confirmPassword"
  ) => {
    event.preventDefault();
    setPasswordVisible((values) => ({
      ...values,
      [field]: !values[field],
    }));
  };

  return (
    <div>
      <section
        ref={removeClass}
        className={`${style.signupSection} ${sign ? style.show : " "}`}
      >
        <div className="overlay">
          <div className={style.formDetails}>
            <div className={style.formImg}>
              <Image
                className={style.signupImg}
                src="/Images/signUpImg.jpg"
                width={350}
                height={100}
                alt=""
              />
            </div>

            <div className={style.form}>
              <form>
                <span className={style.cancelSignup} onClick={handleSignUp}>
                  <FaXmark />
                </span>

                <h3 className={style.formHeader}>Get Started!</h3>

                <div className={style.formRow}>
                  <label htmlFor="firstName">
                    <b>Firstname: </b>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleInput}
                    value={inputField.firstName || ""}
                  />
                </div>

                <div className={style.formRow}>
                  <label htmlFor="lastName">
                    <b>Lastname: </b>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleInput}
                    value={inputField.lastName || ""}
                  />
                </div>

                <div className={style.formRow}>
                  <label htmlFor="email">
                    <b>Email: </b>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInput}
                    value={inputField.email || ""}
                  />
                </div>

                {/* password */}
                <div className={style.formRow}>
                  <label htmlFor="password">
                    <b>Password: </b>
                  </label>
                  <input
                    type={passwordVisible.password ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    onChange={handleInput}
                    value={inputField.password || ""}
                  />
                  <div className={style.rowIcon}>
                    <button
                      className={`${style.passwordBtn} ${style.rowBtn}`}
                      onClick={(event) =>
                        togglePasswordVisibility(event, "password")
                      }
                    >
                      {passwordVisible.password ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>

                {/* Confirm password */}
                <div className={style.formRow}>
                  <label htmlFor="confirmPassword">
                    <b>Confirm password: </b>
                  </label>
                  <input
                    type={passwordVisible.confirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleInput}
                    value={inputField.confirmPassword || ""}
                    required
                  />
                  <div className={style.rowIcon}>
                    <button
                      className={`${style.passwordBtn} ${style.rowBtn}`}
                      onClick={(event) =>
                        togglePasswordVisibility(event, "confirmPassword")
                      }
                    >
                      {passwordVisible.confirmPassword ? (
                        <FaEye />
                      ) : (
                        <FaEyeSlash />
                      )}
                    </button>
                  </div>
                </div>

                <div className={style.formXtra}>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <p>I agree to the terms & conditions</p>
                </div>

                <div className={style.formSubmitBtn}>
                  <button className={style.formBtn}>Register Now</button>
                </div>

                <div className={style.formDet}>
                  <h4>
                    Already have an account? <button>Log in</button>
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
