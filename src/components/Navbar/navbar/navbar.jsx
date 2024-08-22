import { useState } from "react";
import Header from "../header";
import Bar from "../bar";
import Menu from "../Menu/menu";
import SignUp from "../signup/signup";
import LogIn from "../login/login";
import "./navbar.css";

function Navbar() {
  const [bar, setBar] = useState(false);
  const [join, setJoinWeb] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  const openBar = () => {
    setBar(!bar);
  };

  const openSignUpBar = () => {
    setDisplayMenu(!displayMenu);
    console.log("Hello world");
  };

  const joinWeb = () => {
    setJoinWeb(!join);
  };

  return (
    <div>
      <header>
        <div className="header-wrapper">
          <div className="web-name">
            <h2>
              <span>D</span>mobile
            </h2>
          </div>

          <button className="web-join" onClick={joinWeb}>
            join
          </button>

          <div className="web-aside">
            <button id="header-cart">
              <i className="fa-solid fa-shopping-cart"></i>
            </button>
            <Bar openBar={openBar} />
          </div>

          <div className="header-aside">
            <div className="header-links">
              <ul>
                <li>
                  <a href="">
                    products{" "}
                    <span>
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="">BMW</a>
                    </li>
                    <li>
                      <a href="">Camry</a>
                    </li>
                    <li>
                      <a href="">Toyota</a>
                    </li>
                    <li>
                      <a href="">Honda</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="">
                    services{" "}
                    <span>
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="">iBuy</a>
                    </li>
                    <li>
                      <a href="">iSell</a>
                    </li>
                    <li>
                      <a href="">iSwap</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="">contact</a>
                </li>
              </ul>
            </div>

            <span id="header-aside-btn">
              <i className="fa-solid fa-shopping-cart"></i>
            </span>

            <Header openSignUpBar={openSignUpBar} />
          </div>
        </div>
      </header>

      <Menu bar={bar} />
      <SignUp displayMenu={displayMenu} />
      <LogIn join={join} />
    </div>
  );
}

export default Navbar;
