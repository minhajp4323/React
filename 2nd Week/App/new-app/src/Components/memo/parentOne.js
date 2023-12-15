import React, { useState } from "react";
import { MemoizedChildOne } from "./ChildOne";

function ParentOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Minhaj");

  console.log("Parent Two render ");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count-{count} </button>
      <button onClick={()=> setName("Brideon")}>Change Name</button>
      <h5>{name} </h5>
      <MemoizedChildOne name={name} />
    </div>
  );
}

export default ParentOne;
