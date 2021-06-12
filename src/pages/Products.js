import React from "react";
import ProductsList from "../components/ProductsList";
import SearchForm from "../components/SearchForm";

const Products = () => {
  return (
    <main>
      <SearchForm />
      <ProductsList />
    </main>
  );
};

export default Products;
