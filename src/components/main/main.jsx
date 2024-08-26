import Products from "./products/products";
import { useRef, useState } from "react";
import "./main.css";

function Main() {
   const [activeKey, setActiveKey] = useState(0);
  const buttons = ["All", "Phones", "Laptops", "Others"];

  const handleClick = (id) => {
    setActiveKey(id)
  }

  return (
    <div>
      <main>
        <section className="products">
          <div className="products-wrapper">
              <div className="products-btns">
                {buttons.map((btn, id) => (
                        <div className={`product-btn ${activeKey === id ? 'product-active' : " "}`} onClick={() => handleClick(id)}>{btn} </div>
                ))}
              </div>

            <Products />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
