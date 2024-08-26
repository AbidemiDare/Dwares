// import "./menu.css";
import { useRef } from "react";
import "./menu.css";

function Menu({ bar, menu, setMenu }) {
  const openElement = useRef(null);

  const closeMenu = () => {
    setMenu(menu);
    document.body.style.overflow = "auto";
  };

  const hideBar = () => {
    if (openElement.current) {
      openElement.current.className = openElement.current.className
        .replace("show", " ")
        .trim();
    }

    closeMenu();
  };

  return (
    <>
      {menu && (
        <section
          className={`menu-container ${bar ? "show" : " "}`}
          ref={openElement}
        >
          <div className="menu-wrapper">
            <div className="menu-info">
              <div className="web-name">
                <h2>
                  <span>D</span>mobile
                </h2>
              </div>

              <span onClick={hideBar} className="cancel-menu">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>

            <div className="menu-links">
              <ul>
                <li className="menu-item">
                  <a href="">home</a>
                </li>

                <li className="menu-item">
                  <a href="">
                    products{" "}
                    <span>
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
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

                <li className="menu-item">
                  <a href="">
                    services{" "}
                    <span>
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
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

                <li className="menu-item">
                  <a href="">faqs</a>
                </li>

                <li className="menu-item">
                  <a href="">contact</a>
                </li>
              </ul>
            </div>

            <div className="menu-socials">
              <h4>Connect with us</h4>
              <div className="menu-social-icons">
                <span>
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span>
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span>
                  <i className="fa-brands fa-linkedin"></i>
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Menu;
