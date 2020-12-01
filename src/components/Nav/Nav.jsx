import React from 'react';
import c from './Nav.module.css'

const Nav = () => {
    return (
        <div className={c.nav}>
                <a href="profile">Profile</a>
                <a href="dialogs">Messages</a>
                <a href="">News</a>
                <a href="">Music</a>
                <a href="">Setting</a>
        </div>
    )
};
export default Nav;
