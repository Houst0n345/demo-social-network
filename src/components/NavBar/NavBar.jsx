import React from 'react';
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={s.sidebar}>
            <nav className={s.nav}>
            <ul className={s.list}>
                <li>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/messages'>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/friends'>Friends</NavLink>
                </li>
                <li>
                    <NavLink to='/users'>Users</NavLink>
                </li>
            </ul>
        </nav>
        </div>
       );
};

export default NavBar;