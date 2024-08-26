import { useState, useRef } from "react";

function Productbtns({ id, btn, moveBtn }) {
  const [activeKey, setActiveKey] = useState(0);
  const [activeIndex, setIndex] = useState(null)

  const handleClick = (id) => {
    setIndex(id)

    if(activeIndex === id ) {
      
    }
  }

  return (
    <div>
      {/* <div className="product-btn product-btn-one product-active">All</div> */}
      <div key={id} className={`product-btn ${id === activeKey ? "product-active" : " "}`} onClick={() => handleClick(id)}>
        {btn}
      </div>
    </div>
  );
}

export default Productbtns;
