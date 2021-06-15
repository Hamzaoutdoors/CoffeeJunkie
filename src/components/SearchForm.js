import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const {
    setSearchTerm,
    searchTarget,
    setCoffees,
    coffees,
    searchTerm,
    filterDisplay,
    setFilterDisplay,
  } = useGlobalContext();
  const searchValue = React.useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (searchTerm !== "") {
      const results = coffees.filter((coffee) =>
        coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterDisplay(results);
    } else {
      setFilterDisplay(coffees);
    }
  }, [searchTerm]);
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            search your favourite {`${searchTarget ? "Drink" : "Product"}`}
          </label>
          <input
            type="text"
            placeholder="Search"
            name="name"
            id="name"
            value={searchTerm}
            ref={searchValue}
            onChange={() => setSearchTerm(searchValue.current.value)}
            className="input-field"
          ></input>
          <FaSearch className="search-icon" />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
