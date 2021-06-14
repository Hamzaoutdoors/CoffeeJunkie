import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import coffeeData from "../coffeeData";
import coffeeCategories from "../categories";

const SingleCoffee = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (coffeeData) {
      const newCoffee = coffeeData.filter(
        (item) => parseInt(item.id) === parseInt(id)
      );
      const searchCoffee = { ...newCoffee };
      setCoffee(searchCoffee);
    } else {
      setCoffee(null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!coffee) {
    return <h2 className="section-title">no coffee to display</h2>;
  }
  const { name, categories, detail_image, description, price } = coffee[0];
  return (
    <section className="section coffee-section">
      <Link to="/" className="btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>

      <div className="drink">
        <img src={detail_image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <div className="drink-catPrice">
            <p>
              <span className="drink-data">Category :</span>{" "}
              {coffeeCategories.map((item, index) => {
                if (item.id === categories) {
                  return <span key={index}>~ {item.name}</span>;
                }
              })}
            </p>
            <p>
              <span className="drink-data">price :</span>${price}.00
            </p>
          </div>
          <p>
            <span className="drink-data">Instructions :</span>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCoffee;
