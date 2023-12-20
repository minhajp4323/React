import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <NavLink onClick={()=>navigate("home")}>Click</NavLink>
    </div>
  );
}

export default Main;
