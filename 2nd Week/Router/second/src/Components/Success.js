import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Your blog is Successfully Created..</h3>
      <button onClick={()=>navigate("/")}>Back to Home..</button>
    </div>
  );
}

export default Success;
