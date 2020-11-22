import React from 'react';
import c from './Nav.module.css'

const Nav = () => {
    return (
        <div className={c.nav}>
                <a href="">Profile</a>
                <a href="">Messages</a>
                <a href="">News</a>
                <a href="">Music</a>
                <a href="">Setting</a>
        </div>
    )
};
export default Nav;
