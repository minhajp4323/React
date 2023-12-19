import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  // const NavLinkStyle = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "normal",
  //     textDecoration: isActive ? "none" : "underline",
  //   };
  // };
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="create">Create New Blog</NavLink>
      <NavLink to="posted">Posted Blogs</NavLink>
    </nav>
  );
}

export default Navbar;
