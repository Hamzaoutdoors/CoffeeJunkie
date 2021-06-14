import React from "react";
import ProductsList from "../components/ProductsList";
import SearchForm from "../components/SearchForm";

const Products = () => {
  return (
    <main className="product">
      <div className="product-container">
        <ProductsList />
      </div>
    </main>
  );
};

export default Products;
