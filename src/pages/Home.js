import React from "react";
import CoffeeList from "../components/CoffeeList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main className="home">
      <div className="home-container">
        <SearchForm />
        <CoffeeList />
      </div>
    </main>
  );
};

export default Home;
