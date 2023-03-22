import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="links-container">
      <NavLink className="nav-link" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" exact to="/meet pet">
        Meet Pet
      </NavLink>
      <NavLink className="nav-link" exact to="/shop">
        Shop
      </NavLink>
    </div>
  );
}

export default NavBar;
