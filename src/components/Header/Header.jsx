import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import styleFor from '../common/css/button.module.css';
import Logo from "../common/Logo";

const Header = (props) => {
    return (<header className={s.logo}>

            <div className={s.img}>
                <Logo/>
            </div>

            <div className={s.login}>
                {props.isAuth
                    ? <span  className={s.login__item}>{props.login}</span>:
                    <div className={s.login__button}><NavLink to={'/login'}
                                                              className={styleFor.button}>Login</NavLink></div>}

                 {props.isAuth
                     ? <div className={s.login__item}><button onClick={props.logout}
                                                                className={styleFor.button}>Logout</button></div>
                     : ''}

            </div>

    </header>)

};
export default Header;