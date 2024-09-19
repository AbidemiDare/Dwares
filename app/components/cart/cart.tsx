import { FaXmark } from "react-icons/fa6";
import style from "./cart.module.css";
import { useCart } from "./cartContext";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

interface cartProps {
  cart: boolean;
  displayCart: VoidFunction;
}

const Cart: React.FC<cartProps> = ({ cart, displayCart }) => {
  const { cartItems, dispatch } = useCart();

  const handleRemoveFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  return (
    <>
      {/* Cart container */}
      <div className={`${style.cartContainer} ${cart ? style.show : ""}`}>
        <header className={style.cartHeader}>cart items</header>
        <div className={style.cancelBtn} onClick={displayCart}>
          <FaXmark />
        </div>

        {/* Cart wrapper */}
        <div className={style.cartWrapper}>
          {cartItems.length === 0 ? (
            <h3>Oops! Your cart is empty</h3>
          ) : (
            <>
              {cartItems.map((item) => {
                const totalPrice: number = item.price * item.quantity;
                return (
                  <div key={item.id} className={style.singleItem}>
                    {" "}
                    <h3 className={style.cartTitle}>{item.title}</h3>
                    <div className={style.cartQuantity}>
                      {" "}
                      <h4>Quantity</h4>
                      <p> {item.quantity}</p>
                    </div>
                    <div className={style.cartPrice}>
                      <h4>Price</h4>
                      <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <button
                      className={style.cartButton}
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                );
              })}

              {/* Clear Cart Button */}
              <button
                className={style.cartClear}
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                Clear
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
