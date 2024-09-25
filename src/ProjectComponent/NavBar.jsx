import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/products/create">Create Products</NavLink>
        
      </nav>
    </div>
  );
};

export default NavBar;
