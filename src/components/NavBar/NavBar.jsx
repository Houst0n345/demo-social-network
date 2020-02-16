import React from 'react';
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={s.sidebar}>
            <NavLink className={s.sidebar__item} to='/profile'>Profile</NavLink>
            <NavLink className={s.sidebar__item} to='/messages'>Messages</NavLink>
            <NavLink className={s.sidebar__item} to='/friends'>Friends</NavLink>
            <NavLink className={s.sidebar__item} to='/users'>Users</NavLink>
            <NavLink className={s.sidebar__item} to='/news'>News</NavLink>
        </div>
    );
};

export default NavBar;