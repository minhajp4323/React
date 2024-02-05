import React, { useState } from "react";

function Welcome() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const update=(e)=>{
    console.log(e.target.value);
  }
  return (
    <div style={{ backgroundColor:  count  === 4 ? "red" : "green" }}>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>

      <input type="text" onChange={update}/>
    </div>
  );
}

export default Welcome;
