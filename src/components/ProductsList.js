import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import coffeeCategories from "../categories";

const ProductsList = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section">
      <div className="coffee-title">
        <h2 className="section-title">Tasty Products</h2>
        <div className="underline"></div>
      </div>
      <div className="coffees-center">
        {coffeeCategories.map((item) => {
          const { id, name, detail_image, title, subtitle } = item;
          return (
            <article className="coffee " key={id}>
              <div className="img-container">
                <img src={detail_image} alt={name} />
              </div>
              <div className="coffee-footer">
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>{subtitle}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;
