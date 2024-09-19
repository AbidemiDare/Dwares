import { FaLongArrowAltRight } from "react-icons/fa";
import style from "./footer.module.css";

export default function Footer() {
  const store = ["fruits", "meat", "fish", "oil", "vegetables"];
  const about = ["About us", "Client", "Products", "Services"];
  const legal = [
    "Terms & conditions",
    "Privacy policy",
    "Legal",
    "Author license",
  ];

  return (
    <>
      <footer className={style.footer}>
        <div className={style.footerWrapper}>
          <div className={style.footerStore}>
            <h4 className={style.footerHeader}>
              <b>store</b>
            </h4>
            <ul>
              {store.map((item) => (
                <li className={style.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className={style.footerAbout}>
            <h4 className={style.footerHeader}>
              <b>About</b>
            </h4>
            <ul>
              {about.map((item) => (
                <li className={style.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={style.footerLegal}>
            <h4 className={style.footerHeader}>
              <b>Legal</b>
            </h4>
            <ul>
              {legal.map((item) => (
                <li className={style.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={style.footerEmail}>
            <label className={style.footerHeader} htmlFor="email">
              Email
            </label>
            <div className={style.footerInput}>
              <input type="text" />
              <button className={style.footerArrow}>
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>

        <hr className={style.hr} />
        <div className={style.footerEnding}>
          <h3>
            <span>D</span>wares{" "}
          </h3>
          <p>
            {" "}
            &copy; <span>All Rights Reserved.</span>
          </p>
        </div>
      </footer>
    </>
  );
}
