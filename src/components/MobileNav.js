import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import ToggleButton from "./ToggleBtn";
import Logo from "./Logo";
class MobNavbar extends Component {
  state = {
    toggle: false,
  };
  toggleDD = () => {
    this.setState((prevState) => {
      return { toggle: !prevState.toggle };
    });
  };
  render() {
    const { toggle } = this.state;
    let className = toggle ? "show" : "hide";

    return (
      <div className="mob-navbar">
        <div>
          <Logo />
          <ToggleButton toggle={this.toggleDD} />
        </div>
        <ul className={className} onClick={this.toggleDD}>
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
              <li onClick={this.props.logout}>Logout</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default MobNavbar;
