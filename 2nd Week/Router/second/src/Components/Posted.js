import React, { useContext } from "react";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";

function Posted() {
  const [blog] = useContext(myContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Posted Blogs </h1>
      
      <ul>
        {blog.map((item)=>(
            <li><button onClick={()=>navigate("/display")} ><h1>{item.bloghead}</h1></button></li>
        ))}
        <li>Understanding the Role and Evolution of TMF Systems in Clinical Research</li>
      </ul>
    </div>
  );
}

export default Posted;
