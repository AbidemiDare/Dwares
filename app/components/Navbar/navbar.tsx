"use client";

import { useState, useEffect } from "react";
import LogIn from "../../auth/login/login";
import SignUp from "../../auth/signup/signup";
import Menu from "../../auth/Menu/menu";
import style from "./navbar.module.css";
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartShopping, FaChevronDown } from "react-icons/fa6";
import Cart from "../cart/cart";
import { motion } from "framer-motion";

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const [sign, setSign] = useState(false);
  const [login, setLogin] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Toggle Body function
  const toggleBodyOverflow = (name: boolean) => {
    if (name) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(!scroll);
      } else {
        setScroll(scroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle Login
  const openLogin: () => void = () => {
    setLogin((login) => !login);
  };

  useEffect(() => {
    toggleBodyOverflow(login);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [login]);

  // open menu bar
  const displayBar: () => void = () => {
    setMenu((menu) => !menu);
  };

  useEffect(() => {
    toggleBodyOverflow(menu);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  // cart display
  const displayCart: () => void = () => {
    setCart((cart) => !cart);
  };

  useEffect(() => {
    toggleBodyOverflow(cart);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cart]);

  // Handle signup
  const handleSignUp: () => void = () => {
    setSign((sign) => !sign);
  };

  useEffect(() => {
    toggleBodyOverflow(sign);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sign]);

  return (
    <>
      <header className={`${style.header} ${scroll ? style.scroll : " "}`}>
        <div className={style.headerWrapper}>
          <motion.div
            className={style.webName}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 2, type: "spring" }}
          >
            <h2>
              <span>D</span>wares
            </h2>
          </motion.div>

          <button className={style.webBtn}>
            <span className={style.webLogin} onClick={openLogin}>
              Log in
            </span>
            <span className={style.webSignUp} onClick={handleSignUp}>
              Sign up
            </span>
          </button>

          <div className={style.webAside}>
            <button className={style.headerCart} onClick={displayCart}>
              <FaShoppingCart />
            </button>
            <button onClick={displayBar} className={style.headerBar}>
              <FaBars />
            </button>
          </div>

          <div className={style.headerAside}>
            <div className={style.headerLinks}>
              <ul>
                <li className={style.headerList}>
                  <button className={style.navBtn}>
                    products{" "}
                    <span>
                      <FaChevronDown />
                    </span>
                  </button>
                  <ul className={style.dropdown}>
                    <li>
                      <a href="">fruits</a>
                    </li>
                    <li>
                      <a href="">meat</a>
                    </li>
                    <li>
                      <a href="">fish</a>
                    </li>
                    <li>
                      <a href="">egg</a>
                    </li>
                  </ul>
                </li>

                <li className={style.headerList}>
                  <button className={style.navBtn}>
                    services
                    <span>
                      <FaChevronDown />
                    </span>
                  </button>

                  <ul className={style.dropdown}>
                    <li>
                      <a href="">delivery</a>
                    </li>
                    <li>
                      <a href="">catering</a>
                    </li>
                    <li>
                      <a href="">consultancy</a>
                    </li>
                  </ul>
                </li>

                <li className={style.headerList}>
                  <button className={style.navBtn}>contact</button>
                </li>
              </ul>
            </div>

            <span className={style.headerAsideBtn} onClick={displayCart}>
              <FaCartShopping />
            </span>

            <button className={style.headerBtn}>
              <button className={style.webLogin} onClick={openLogin}>
                Log in
              </button>
              <button className={style.webSignUp} onClick={handleSignUp}>
                Sign up
              </button>
            </button>
          </div>
        </div>

        <Cart cart={cart} displayCart={displayCart} />
        <Menu menu={menu} displayBar={displayBar} />
        <SignUp sign={sign} handleSignUp={handleSignUp} />
        <LogIn login={login} openLogin={openLogin} />
      </header>
    </>
  );
};

export default Navbar;
