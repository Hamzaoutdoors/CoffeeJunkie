import React from "react";
import coffeeCategories from "../categories";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const ProductsList = () => {
  const { loading } = useGlobalContext();

  return (
    <div>
      <h2>Products list component</h2>
    </div>
  );
};

export default ProductsList;
