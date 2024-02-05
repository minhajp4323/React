import React from "react";
import { useReducer } from "react";

function Counter() {
  const initialvalue = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialvalue;
    }
  };
  const consl = (e) => {
    console.log(e.target.value);
  };

  const [count, dispatch] = useReducer(reducer, initialvalue);
  return (
    <div style={{ backgroundColor: count <= 0 ? "red" : "green" }}>
      <h1>Coun {count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <input type="text" onChange={consl} />
    </div>
  );
}

export default Counter;
