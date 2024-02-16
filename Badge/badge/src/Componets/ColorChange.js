import React, { useState } from "react";

function ColorChange() {
  const [count, setCount] = useState(0);
  return (
    <div style={{backgroundColor: count===4?"blue": "green"}}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click.</button>..
    </div>
  );
}

export default ColorChange;
