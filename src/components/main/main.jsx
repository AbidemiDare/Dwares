import Products from "./products/products";
import Productbtns from "./products/productbtns";
import { useRef, useState } from "react";
import "./main.css";

function Main() {
  const buttons = ["All", "Phones", "Laptops", "Others"];

  // const [moveBtn, setMoveBtn] = useState(0);
  // const addElement = useRef(null);


  // const moveRight = () => {
  //   setMoveBtn(moveBtn + 50);
  // };

  // const moveLeft = () => {
  //   setMoveBtn(moveBtn - 50);

  //   const hasClass = addElement.current.classList.contains("show");
  //   if (!hasClass) {
  //     addElement.current.classList.add("show");
  //   }
  // };


  return (
    <div>
      <main>
        <section className="products">
          <div className="products-wrapper">
            <div className="products-btn-container">
              <div className="products-btns">
                {buttons.map((name, id) => (
                  <Productbtns id={id} btn={name} />
                ))}
              </div>

              {/* <button
                className="scroll-btn right"
                ref={addElement}
                onClick={moveRight}>
                {" "}
                &#10095;
              </button>

              <button className="scroll-btn left" onClick={moveLeft}>
                &#10094;
              </button> */}
            </div>

            <Products />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
