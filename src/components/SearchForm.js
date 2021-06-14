import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, searchTarget } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCoffee = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            search your favourite {`${searchTarget ? "Coffee" : "Product"}`}
          </label>
          <input
            type="text"
            placeholder="Search"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCoffee}
            className="input-field"
          ></input>
          <FaSearch className="search-icon" />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
