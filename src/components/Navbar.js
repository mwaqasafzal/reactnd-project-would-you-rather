import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import Logo from "./Logo";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <Logo />
      <div>
        <ul className="navbar-x">
          <li>
            <NavLink activeClassName="active" to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/add">
              Create-Question
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/leadersboard">
              Leadersboard
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-y">
          <li>
            <Profile />
          </li>
          <li onClick={props.logout}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
