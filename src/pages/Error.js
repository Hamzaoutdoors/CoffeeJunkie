import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <button className="btn btn-primary">
          <Link to="/">back home</Link>
        </button>
      </div>
    </section>
  );
};

export default Error;
