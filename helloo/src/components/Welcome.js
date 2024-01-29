import React, { useState } from "react";

function Welcome() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ backgroundColor:  count  === 4 ? "red" : "green" }}>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default Welcome;
