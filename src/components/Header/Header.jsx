import React from 'react';
import c from './Header.module.css'
import Nav from "../Nav/Nav";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <div className={c.header}>
            {props.isAuth ? props.login :
                <NavLink to ={'/login'}>Login</NavLink>}
            <span>Social Network</span>
            <Nav/>
        </div>
    )
};
export default Header;