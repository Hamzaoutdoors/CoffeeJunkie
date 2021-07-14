import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";


const Coffee = ({ id, category, name, imgThum, sign ,imgDtl, info, price }) => {
  const {
    setAddedToBasket,
    addedToBasket
  } = useGlobalContext();

 const  handelClick =()=>{
   
  var addedToBasketBis = sign =='+' ? [...addedToBasket, id]: addedToBasket.filter(x=>x != id);
  setAddedToBasket(addedToBasketBis);
  }

  return (
    <article className="coffee">
      <div className="img-container">
        <img src={imgThum} alt={name} />
      </div>
      <div className="coffee-footer">
        <h3>{name}</h3>
        <h4>Class : {category}</h4>
        <div className="footer-btn">
          <Link to={`/coffee/${id}`} className="btn-primary">
            details
          </Link>
          <button className='btn btn-add-basket' onClick={handelClick} >
            {sign}   
          </button>
        </div>
      </div>
    </article>
  );
};

export default Coffee;
