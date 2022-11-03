import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ Whiskey, Duke, Perry, Tubby }) {
  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        All Dogs
      </NavLink>
      <NavLink exact to={`/dogs/${Whiskey}`}>
        Whiskey
      </NavLink>
      <NavLink exact to={`/dogs/${Duke}`}>
        Duke
      </NavLink>
      <NavLink exact to={`/dogs/${Perry}`}>
        Perry
      </NavLink>
      <NavLink exact to={`/dogs/${Tubby}`}>
        Tubby
      </NavLink>
    </nav>
  );
}
// end

export default Nav;
