import React from "react";
import { Link } from "react-router-dom";

const Coffee = ({ id, category, name, imgThum, imgDtl, info, price }) => {
  return (
    <article className="coffee">
      <div className="img-container">
        <img src={imgThum} alt={name} />
      </div>
      <div className="coffee-footer">
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Coffee;
