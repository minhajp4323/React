import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "reset":
      return initialValue;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={()=>dispatch("Increment")} >Increment</button>
      <button onClick={()=>dispatch("Decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducer;
