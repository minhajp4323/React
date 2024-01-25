import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
      break;
  }
};

function Welcome() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div
      style={{
        backgroundColor: count < 5 ? "red" : "black",
        color: count < 5 ? "black" : "white",
      }}
    >
      <h1>useReducer</h1>
      <h3>Count: {count} </h3>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Welcome;
