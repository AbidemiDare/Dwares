import { useState, useRef } from "react";
import "./login.css";

function LogIn({ join, login, setLogin }) {
  const [inputField, setInputField] = useState({});
  const [password, setShowPassword] = useState(false);
  const [showEyeBtn, setShowEyeBtn] = useState(false);
  const [showEyeSlashBtn, setShowEyeSlashBtn] = useState(false);
  const log = useRef(null);
  // const checkInput = useRef(null);

  const closeLogin = () => {
    setLogin(login);
    document.body.style.overflow = "auto";
  };
  
  const removeLog = () => {
    if (log.current) {
      log.current.className = log.current.className.replace("show", " ");
    }

    closeLogin();
  };

  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputField((values) => ({ ...values, [name]: value }));
  };

  const handleSlashPassword = (event) => {
    event.preventDefault();
    setShowPassword(!password);
    setShowEyeBtn(!showEyeBtn);
    setShowEyeSlashBtn(!showEyeSlashBtn);
  };

  return (
    <>
      {login && (
        <section ref={log} className={`login-section ${join ? "show" : " "}`}>
          <div className="login-wrapper">
            <span className="cancel-login" onClick={removeLog}>
              <i className="fa-solid fa-xmark"></i>
            </span>

            <div className="login-form-details">
              <div className="form-img">
                <img
                  className="login-img"
                  src="/assets/loginImg-one.jpg"
                  width="350"
                  alt=""
                />
              </div>

              <form action="" className="login-form">
                <div className="login-header">
                  <h2>welcome</h2>
                </div>

                <div className="form-row">
                  <label htmlFor="email">Email: </label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={inputField.email || ""}
                    onChange={handleInputs}
                    placeholder="JohnDoe@gmail.com"
                    id="email"
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="password">Password: </label>
                  <input
                    className="form-input"
                    type={password ? "text" : "password"}
                    name="password"
                    value={inputField.password || ""}
                    id="log-password"
                    onChange={handleInputs}
                  />

                  <button className="login-btn" onClick={handleSlashPassword}>
                    <span>
                      <i
                        className={`fa-solid fa-eye ${
                          showEyeBtn ? "show" : " "
                        }`}
                      ></i>
                    </span>{" "}
                    <span>
                      <i
                        className={`fa-solid fa-eye-slash ${
                          showEyeSlashBtn ? "hidden" : " "
                        }`}
                      ></i>
                    </span>
                  </button>
                </div>

                <button
                  className="log-btn"
                  onClick={(event) => event.preventDefault()}
                >
                  Log In
                </button>

                <div className="form-xtra">
                  <div className="form-xtra-left">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <h4>Remember me</h4>
                  </div>
                  <div className="form-xtra-right">
                    <h3>
                      <a href="">forgot password?</a>
                    </h3>
                  </div>
                </div>

                <div className="form-social">
                  <a href="">
                    <i className="fa-solid fa-envelope"></i>email
                  </a>
                  <a href="">
                    <i className="fa-brands fa-google"></i>google
                  </a>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>facebook
                  </a>
                  <a href="">
                    <i className="fa-brands fa-github"></i>github
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default LogIn;
