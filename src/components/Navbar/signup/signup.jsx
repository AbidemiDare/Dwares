import { useRef } from "react";
import "./signup.css";

function SignUp({ displayMenu }) {
  const removeClass = useRef(null);

  const removeBar = () => {
    if (removeClass.current) {
      removeClass.current.className = removeClass.current.className.replace(
        "show",
        " "
      );
    }
  };

  return (
    <div>
      <section
        ref={removeClass}
        className={`signup-section ${displayMenu ? "show" : " "}`}
      >
        <div className="overlay">
          <div className="form-details">
            <div className="form-img">
              <img
                className="login-img"
                src="./src/assets/signUpImg.jpg"
                width="350"
                alt=""
              />
            </div>

            <div className="form">
              <form>
                <span className="cancel-signup" onClick={removeBar}>
                  <i className="fa-solid fa-xmark"></i>
                </span>

                <h3 className="Form-header">Get Started!</h3>

                <div className="form-row">
                  <label htmlFor="name">
                    <b>Firstname: </b>
                  </label>
                  <input type="text" id="name" />
                </div>

                <div className="form-row">
                  <label htmlFor="lname">
                    <b>Lastname: </b>
                  </label>
                  <input type="text" id="lname" />
                </div>

                <div className="form-row">
                  <label htmlFor="email">
                    <b>Email: </b>
                  </label>
                  <input type="text" id="email" />
                </div>

                <div className="form-row">
                  <label htmlFor="password">
                    <b>Password: </b>
                  </label>
                  <input type="password" id="password" required />
                  <div className="row-icon">
                    <button className="password-btn row-btn">
                      <span>
                        <i className="fa-regular fa-eye fa-pass-eye"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-eye-slash fa-pass-slash"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="form-row">
                  <label htmlFor="password">
                    <b>Confirm password: </b>
                  </label>
                  <input type="password" id="confirm-password" required />
                  <div className="row-icon">
                    <button className="confirm-password-btn row-btn">
                      <span>
                        <i className="fa-regular fa-eye fa-confirm-eye"></i>
                      </span>
                      <span>
                        <i className="fa-regular fa-eye-slash fa-confirm-slash"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="form-xtra">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <p>I agree to the terms & conditions</p>
                </div>

                <div className="form-submit-btn">
                  <button className="form-btn">Register Now</button>
                </div>

                <div className="form-det">
                  <h4>
                    Already have an account?{" "}
                    <a href="" id="show-log">
                      Log in
                    </a>
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
