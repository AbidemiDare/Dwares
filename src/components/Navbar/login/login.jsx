import { useState, useRef } from "react";
import "./login.css";

function LogIn({ join }) {
  const [value, setValue] = useState("");
  const log = useRef(null);

  const removeLog = () => {
    if (log.current) {
      log.current.className = log.current.className.replace("show", " ");
    }
  };

  const approveValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
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
                  value={value}
                  onChange={approveValue}
                  placeholder="JohnDoe@gmail.com"
                  id="email"
                />
              </div>

              <div className="form-row">
                <label htmlFor="password">Password: </label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  id="log-password"
                />
                <button className="login-btn">
                  <span>
                    <i className="fa-regular fa-eye log-eye"></i>
                  </span>{" "}
                  <span>
                    <i className="fa-regular fa-eye-slash log-slash"></i>
                  </span>
                </button>
              </div>

              <button className="log-btn">Log In</button>

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
    </>
  );
}

export default LogIn;
