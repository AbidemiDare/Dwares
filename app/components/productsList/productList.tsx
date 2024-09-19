"use client";

import { useCart } from "../cart/cartContext";
import style from "./products.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  quantity: number;
}

interface AddedProducts {
  products: Product[];
  buttons: string[];
  loading: boolean;
  filteredProducts: Product[];
}

export default function ProductList({
  products,
  buttons,
  loading,
  filteredProducts,
}: AddedProducts) {
  const { dispatch } = useCart();

  return (
    <>
      <div className={style.productsContainer}>
        {loading ? (
          <p className={style.productLoading}>Loading products...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={style.productBase}>
              <div className={style.productImgContainer}>
                <img
                  src={
                    product.images.length === 1
                      ? product.images[0]
                      : product.images[1]
                  }
                  className={style.productImg}
                  alt="phone image"
                />
              </div>

              <div className={style.productInfo}>
                <h4 className={style.productName}>{product.title}</h4>
                <h3 className={style.productCategory}>{product.tags[0]}</h3>
                <p className={style.productPrice}>{`$${product.price}`}</p>
              </div>

              <div className={style.productBtns}>
                <button
                  className={`${style.productButton} ${style.productCart}`}
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products is found in this company</p>
        )}
      </div>
    </>
  );
}
