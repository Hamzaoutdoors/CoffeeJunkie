import React from "react";
import Coffee from "./Coffee";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CoffeeList = () => {
  const { coffees, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (Coffee.length < 1) {
    return (
      <div>
        <h2 className="section-title">
          no coffees matched your search criteria
        </h2>
        ;
      </div>
    );
  }
  return (
    <div>
      <h2>Coffee list component</h2>
    </div>
  );
};

export default CoffeeList;
