import React  from "react";
import { useContext } from "react";
import { UserContext } from "../../App";



function Context() {
    const user = useContext(UserContext);
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}

export default Context;
