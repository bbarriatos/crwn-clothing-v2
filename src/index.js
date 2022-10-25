import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
