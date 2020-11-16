import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
const MobNavbar = (props) => {
  return (
    <div className="mob-navbar">
      <ul>
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
        <li>
          <ul>
            <li>
              <Profile />
            </li>
            <li onClick={props.logout}>Logout</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MobNavbar;
