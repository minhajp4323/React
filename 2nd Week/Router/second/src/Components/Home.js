import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Here you can create and share your blog..</h3>
      <h1>Create Your Own Blog with us</h1>
      <button onClick={() => navigate('/create')}>Create Your Blog</button>
    </div>
  );
}

export default Home;
