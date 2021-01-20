import React from 'react';
import c from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={c.nav}>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/dialogs">Messages</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/musik">Music</NavLink>
                <NavLink to="/setting">Setting</NavLink>
        </div>
    )
};
export default Nav;
