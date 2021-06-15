import React from "react";
import Coffee from "./Coffee";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CoffeeList = () => {
  const { filterDisplay, loading, searchTerm } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (filterDisplay.length < 1) {
    return (
      <section className="section">
        <h2 className="section-title">
          no coffees matched your search criteria
        </h2>
        ;
      </section>
    );
  }

  return (
    <section className="section">
      <div className="coffee-title">
        <h2 className="section-title">Our Drinks</h2>
        <div className="underline"></div>
      </div>
      <div className="coffees-center">
        {filterDisplay.map((item) => {
          return <Coffee key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CoffeeList;
