import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import styleFor from '../common/css/button.module.css';

const Header = (props) => {
    return (<header className={s.logo}>
        <div className={s.row}>
            <img alt='logo' src='https://image.flaticon.com/icons/svg/2285/2285537.svg' className={s.img}/>
            <div className={s.login}>
                {props.isAuth
                    ? <span  className={s.login__item}>{props.login}</span>:
                    <NavLink to={'/login'} className={styleFor.button}>Login</NavLink>}
                    <span>
                 {props.isAuth
                     ? <button onClick={props.logout}  className={styleFor.button}>Log out</button>
                     : ''}
                     </span>
            </div>
        </div>

    </header>)

};
export default Header;