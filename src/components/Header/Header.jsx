import React from 'react';
import c from './Header.module.css'
import Nav from "../Nav/Nav";


const Header = () => {
    return (
        <div className={c.header}>
            <span>Social Network</span>
            <Nav/>
        </div>
    )
};
export default Header;