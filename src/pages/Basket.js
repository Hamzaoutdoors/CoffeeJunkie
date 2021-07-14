import React from 'react'
import coffeeData from '../coffeeData';
import { useGlobalContext } from '../context';
import Coffee from "../components/Coffee";
function Basket() {
    const {addedToBasket}=useGlobalContext();
    const intersection = coffeeData.filter(x => addedToBasket.includes(x.id));
    const isEmptyBasket =!addedToBasket.length;
    return (
    <>
        {isEmptyBasket ? <div>
           <h1> our Basket is Empty</h1> 
        </div>: <div className="coffees-center">
        {intersection.map((item) => {
          return <Coffee key={item.id} imgThum={item.thumbnail_image} sign='-' category={item.categories} {...item} />;
        })}
      </div> }  
        
    </>
    )
}

export default Basket
