import React, { useMemo, useState } from "react";

const profile = [
  {
    name: "Minhaj",
    age: 22,
    job: "developer",
  },
  { name: "Salim", age: 22, job: "jobless" },
];
function ColorChange() {
  const [count, setCount] = useState(0);
  const backgroundColor = useMemo(() => {
    return count % 3 === 0 ? "blue" : "red";
  }, [count]);
  return (
    <>
      <div style={{ backgroundColor }}>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>

    
    </>
  );
}

export default ColorChange;
