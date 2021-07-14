import React,{useEffect, useRef} from "react";
import Coffee from "./Coffee";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
  }, deps);
}
const CoffeeList = () => {
  const { filterCoffees, loading,addedToBasket, searchTerm } = useGlobalContext();
  useDidMountEffect(()=>alert('your coffee is successfuly added To basket'), [addedToBasket]);

  if (loading) {
    return <Loading />;
  }
  if (filterCoffees.length < 1) {
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
        {filterCoffees.map((item) => {
          return <Coffee key={item.id} sign='+' {...item} />;
        })}
      </div>
    </section>
  );
};

export default CoffeeList;
