import React, { useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
