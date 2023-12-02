import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./design/index.scss";
import ProductCard from "./components/ProductCard/ProductCard";
import axios from "axios";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch(console.error);
  }, []);

  return (
    <Router>
      <div className="products-page">
        <header>
          <div className="logo-and-search">
            <a href="/">
              <img src="/images/logo.png" alt="Electon" />
            </a>

            <div className="search">
              <input
                type="text"
                name="input"
                id="input"
                placeholder="Search any things"
              />
              <button className="button-search">Search</button>
            </div>
          </div>

          <ul className="links">
            <li>
              <img src="/images/user.png" alt="user" />
              <span>Sign in</span>
            </li>

            <li>
              <img src="/images/shopping-cart.png" alt="cart" />
              <span>Cart</span>
            </li>
          </ul>
        </header>

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <ul className="products">
                    {products &&
                      products.map((product) => (
                        <li key={product.id}>
                          <ProductCard
                            name={product.title}
                            image={product.images[0]}
                            price={product.price}
                            href={`products/${product.id}`}
                          />
                        </li>
                      ))}
                  </ul>
                </React.Fragment>
              }
            ></Route>

            <Route path="/products/:id" element={<ProductDetail />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
