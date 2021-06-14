import React from "react";
import Coffee from "./Coffee";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const ProductsList = () => {
  const { coffees, loading } = useGlobalContext();

  return (
    <div>
      <h2>Products list component</h2>
    </div>
  );
};

export default ProductsList;
