// import "./menu.css";
import style from "./menu.module.css";
import { MouseEvent, useState } from "react";
import {
  FaCaretDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";

interface MenuProps {
  menu: boolean;
  displayBar: VoidFunction;
}

const Menu: React.FC<MenuProps> = ({ menu, displayBar }) => {
  const [dropdown, setDropDown] = useState<string | null>(null);

  const handleDropDown = (
    event: MouseEvent<HTMLButtonElement>,
    button: string
  ) => {
    event.preventDefault();
    setDropDown(dropdown === button ? null : button);
  };

  return (
    <>
      {menu && (
        <section
          className={`${style.menuContainer} ${menu ? style.show : " "}`}
        >
          <div className={style.menuWrapper}>
            <div className={style.menuInfo}>
              <div className={style.webName}>
                <h2>
                  <span>D</span>wares
                </h2>
              </div>

              <span onClick={displayBar} className={style.cancelMenu}>
                <FaXmark />
              </span>
            </div>

            <div className={style.menuLinks}>
              <ul>
                <li className={style.menuItem}>
                  <a href="">
                    products{" "}
                    <button
                      onClick={(event) => handleDropDown(event, "products")}
                    >
                      <FaCaretDown />
                    </button>
                  </a>
                  <ul
                    className={`${style.dropdownMenu} ${
                      dropdown === "products" ? style.show : ""
                    }`}
                  >
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

                <li className={style.menuItem}>
                  <a href="">
                    services{" "}
                    <button
                      onClick={(event) => handleDropDown(event, "services")}
                    >
                      <FaCaretDown />
                    </button>
                  </a>
                  <ul
                    className={`${style.dropdownMenu} ${
                      dropdown === "services" ? style.show : ""
                    }`}
                  >
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

                <li className={style.menuItem}>
                  <a href="">contact</a>
                </li>
              </ul>
            </div>

            <div className={style.menuSocials}>
              <h4>Connect with us</h4>
              <div className={style.menuSocialIcons}>
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaLinkedin />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Menu;
