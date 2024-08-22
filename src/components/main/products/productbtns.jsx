import { useState } from "react";

function Productbtns({ id, btn, moveBtn }) {
  const [activeKey, setActiveKey] = useState(0);

  return (
    <div>
      {/* <div className="product-btn product-btn-one product-active">All</div> */}
      <div
        className={`product-btn ${id === activeKey ? "product-active" : " "}`}
        style={{ transform: `translateX(${moveBtn}px)` }}
      >
        {btn}
      </div>
    </div>
  );
}

export default Productbtns;
