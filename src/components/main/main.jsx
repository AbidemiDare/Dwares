import Products from "./products/products";
import Productbtns from "./products/productbtns";
import { useRef, useState } from "react";
import "./main.css";

function Main() {
  const buttons = ["All", "Phones", "Laptops", "Others"];

  const [moveBtn, setMoveBtn] = useState(0);
  const [minClick, setMinClick] = useState(0)
  const [click, setClick] = useState(0)
  const addElement = useRef(null);

  const minClicks = 3;
  const maxClicks = 3;

   const handleMinClicks = () => {
    if(minClick < minClicks) {
      setMinClick(minClick + 1)
    }
  }

  const moveRight = () => {
    setMoveBtn(moveBtn + 50);
  };

  const combineRight = () => {
    moveRight()
    handleMinClicks()
  }

   const handleClicks = () => {
    if(click < maxClicks) {
      setClick(click + 1)
    } 
  }

  const moveLeft = () => {
    setMoveBtn(moveBtn - 50);

    const hasClass = addElement.current.classList.contains("show");
    if (!hasClass) {
      addElement.current.classList.add("show");
    }
  };

  const handleMaxClicks = () => {
    moveLeft()
    handleClicks()
  }

  return (
    <div>
      <main>
        <section className="products">
          <div className="products-wrapper">
            <div className="products-btn-container">
              <div className="products-btns">
                {buttons.map((name, id) => (
                  <Productbtns id={id} btn={name} moveBtn={moveBtn} />
                ))}
              </div>

              <button
                className={`scroll-btn right ${minClick === minClicks ? 'hidden' : ' '}`}
                ref={addElement}
                onClick={combineRight} disabled={minClick >= minClicks}>
                {" "}
                &#10095;
              </button>

              <button className={`scroll-btn left ${click === maxClicks ? 'hidden' : 'show'}`} onClick={handleMaxClicks} disabled={click >= maxClicks}>
                &#10094;
              </button>
            </div>

            <Products />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
