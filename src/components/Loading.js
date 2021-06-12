import React, { useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className="loader">{loading && <h1>Loading ...</h1>}</div>
    </>
  );
};

export default Loading;
