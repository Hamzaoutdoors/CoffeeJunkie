import React from "react";
import Coffee from "./Coffee";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CoffeeList = () => {
  const { coffees, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (coffees.length < 1) {
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
      <h2 className="section-title">Our Drinks</h2>
      <div className="coffees-center">
        {coffees.map((item) => {
          return <Coffee key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CoffeeList;
