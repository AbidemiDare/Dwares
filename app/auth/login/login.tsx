import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import style from "./login.module.css";
import Image from "next/image";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaXmark,
} from "react-icons/fa6";
import Link from "next/link";

interface LogInProps {
  login: boolean;
  openLogin: VoidFunction;
}

interface inputField {
  email?: string;
  password?: string;
}

const LogIn: React.FC<LogInProps> = ({ login, openLogin }) => {
  const [inputField, setInputField] = useState<inputField>({});
  const [password, setShowPassword] = useState(false);

  const handleInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    const name = event.target.name;
    const value = event.target.value;
    setInputField((values) => ({ ...values, [name]: value }));
  };

  const handlePassword = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setShowPassword(!password);
  };

  return (
    <>
      <section className={`${style.loginSection} ${login ? style.show : " "}`}>
          <div className={style.loginFormDetails}>
            <div className={style.formImg}>
              <Image
                className={style.loginImg}
                src="/Images/loginImg-one.jpg"
                width={250}
                height={100}
                alt=""
              />
            </div>

            <form action="" className={style.loginForm}>
              <span className={style.cancelLogin} onClick={openLogin}>
                <FaXmark />
              </span>

              <div className={style.loginHeader}>
                <h2>welcome</h2>
              </div>

              <div className={style.formRow}>
                <label htmlFor="email">Email: </label>
                <input
                  className={style.formInput}
                  type="email"
                  name="email"
                  value={inputField.email || ""}
                  onChange={handleInputs}
                  placeholder="JohnDoe@gmail.com"
                  id="email"
                />
              </div>

              <div className={style.formRow}>
                <label htmlFor="password">Password: </label>
                <input
                  className={style.formInput}
                  type={password ? "text" : "password"}
                  name="password"
                  value={inputField.password || ""}
                  id="log-password"
                  onChange={handleInputs}
                />

                <button className={style.loginBtn} onClick={handlePassword}>
                  <span
                    className={`${style.faEye} ${password ? style.show : " "}`}
                  >
                    <FaEye />
                  </span>
                  <span
                    className={`${style.faEyeSlash} ${
                      password ? style.hidden : " "
                    }`}
                  >
                    <FaEyeSlash />
                  </span>
                </button>
              </div>

              <button
                className={style.logBtn}
                onClick={(event) => event.preventDefault()}
              >
                Log In
              </button>

              <div className={style.formXtra}>
                <div className={style.formXtraLeft}>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <h4>Remember me</h4>
                </div>
                <div className={style.formXtraRight}>
                  <h3>
                    <a href="">forgot password?</a>
                  </h3>
                </div>
              </div>

              <div className={style.formSocial}>
                <Link href="" className={style.link}>
                  <FaEnvelope />
                  <p>Email</p>
                </Link>
                <Link href="" className={style.link}>
                  <FaGoogle />
                  <p>Google</p>
                </Link>
                <Link href="" className={style.link}>
                  <FaFacebook />
                  <p>Facebook</p>
                </Link>
                <Link href="" className={style.link}>
                  <FaGithub />
                  <p>GitHub</p>
                </Link>
              </div>
            </form>
          </div>
      </section>
    </>
  );
};

export default LogIn;
