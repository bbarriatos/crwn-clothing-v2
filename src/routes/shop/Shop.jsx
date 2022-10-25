import React, { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";

import { ProductsContext } from "../../context/ProductsContext";

import "./shop-style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
