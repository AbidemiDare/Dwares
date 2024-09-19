"use client";

import { useState, useEffect } from "react";
import style from "./main.module.css";
import Hero from "../Hero/hero";
import ProductList from "../productsList/productList";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

interface productt {
  category: string;
  title: string;
  tags: string[];
}

const Main: React.FC<productt> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const buttons = ["All", "fruits", "meat", "pet supplies"];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeButton, setActiveButton] = useState("All");
  const [loading, setLoading] = useState(true);
  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url = `https://dummyjson.com/products/category/groceries?limit=${productsPerPage}&skip=${
        (currentPage - 1) * productsPerPage
      }`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products);

        const filteredItems = searchQuery
          ? data.products.filter((product: productt) =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : data.products;
        setFilteredProducts(filteredItems);
        setTotalPages(Math.ceil(data.total / productsPerPage));
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, searchQuery]);

  const handleChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setActiveButton(category);
    const filtered =
      category === "All"
        ? products
        : products.filter((product: productt) =>
            product.tags.includes(category)
          );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Hero handleSearch={handleSearch} searchQuery={searchQuery} />

      <main className={style.main}>
        <section className={style.products}>
          <div className={style.productsWrapper}>
            <div className={style.productsBtns}>
              {buttons.map((btn, id) => (
                <div
                  key={btn}
                  className={`${style.productBtn} ${
                    activeButton === btn ? style.productActive : " "
                  }`}
                  onClick={() => handleCategoryChange(btn)}
                >
                  {btn}{" "}
                </div>
              ))}
            </div>
          </div>

          <ProductList
            products={products}
            buttons={buttons}
            loading={loading}
            filteredProducts={filteredProducts}
          />

          <div className={style.pageWrapper}>
            <button
              className={`${style.pageBtn} ${style.pageBtnLeft}`}
              onClick={() => handleChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaLessThan />
            </button>

            {pageNumbers.map((page: number) => (
              <button
                key={page}
                className={`${style.pageNumber} ${
                  currentPage === page ? style.activePageBtn : ""
                }`}
                onClick={() => handleChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className={`${style.pageBtn} ${style.pageBtnRight}`}
              onClick={() => handleChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaGreaterThan />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
