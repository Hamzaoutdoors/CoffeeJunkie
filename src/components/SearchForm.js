import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, searchTarget } = useGlobalContext();
  return (
    <section className="section">
      <form /* onSubmit={searchFun} */ className="search-form">
        <div className="form-control">
          <label htmlFor="coffee">
            search your favourite {`${searchTarget ? "Coffee" : "Product"}`}
          </label>
          <input type="text" id="coffee" name="coffee" autoFocus></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
