import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../App";

function CreateBlog() {
  const [blog, setBlog] = useContext(myContext);

  const navigate = useNavigate();

  const nameref = useRef(null);
  const blogref = useRef(null);

  function posting() {
    nameref &&
      blogref &&
      setBlog([
        ...blog,
        {
          id: blog.lenght + 1,
          blogname: nameref.current.value,
          bloghead: blogref.current.value
        }
    ])
    nameref.current.value = "";
    blogref.current.value = "";
    window.alert("Your Blog is posted")}

  return (
    <>
      <h1>Start Creating Your Own Blog</h1>
      <label>Name Your Blog</label>
      <br/>
      <input type="text" ref={nameref} /> <br/>
      <label>Create Your Content</label>
      <br/>
      <textarea ref={blogref} rows={5} col></textarea> <br/>
      <button onClick={posting}>Submit</button>
      <button onClick={() => navigate("/posted")}>See your Post</button>
    </>
  );
}

export default CreateBlog;
