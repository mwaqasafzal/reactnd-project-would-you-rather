import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = props => {
    return (
        <div className="navbar">
            <ul className="navbar-x">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Create Poll</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
            </ul>
            <ul className="navbar-y">
                <li>Profile</li>
                <li onClick={props.logout}>Logout</li>
            </ul>
        </div>

    );
}

export default Navbar;