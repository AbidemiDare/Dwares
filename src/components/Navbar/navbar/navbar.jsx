import { useState } from "react";
import Menu from "../Menu/menu";
import SignUp from "../signup/signup";
import LogIn from "../login/login";
import "./navbar.css";

function Navbar() {
  const [bar, setBar] = useState(false);
  const [join, setJoin] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  const [sign, setSign] = useState(false);
  const [login, setLogin] = useState(false);
  const [menu, setMenu] = useState(false);

  // open desktop signUp page
  const openSign = () => {
    setSign(!sign);

    document.body.style.overflow = "hidden";
  };

  const openSignUpBar = () => {
    setDisplayMenu(!displayMenu);

    openSign();
  };

  // open login page
  const openLogin = () => {
    setLogin(!login);

    document.body.style.overflow = "hidden";
  };

  const joinWeb = () => {
    setJoin(!join);

    openLogin();
  };

  // open menu bar
  const openMenu = () => {
    setMenu(!menu);

    document.body.style.overflow = "hidden";
  };

  const openBar = () => {
    setBar(!bar);

    openMenu();
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
            <button onClick={openBar} className="header-bar">
              <i className="fa-solid fa-bars"></i>
            </button>
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

            <button className="btn header-btn" onClick={openSignUpBar}>
              Create an account
            </button>
          </div>
        </div>
      </header>

      <Menu bar={bar} menu={menu} setMenu={setMenu} />
      <SignUp sign={sign} setSign={setSign} displayMenu={displayMenu} />
      <LogIn join={join} login={login} setLogin={setLogin} />
    </div>
  );
}

export default Navbar;
