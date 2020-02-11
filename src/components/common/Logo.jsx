import React from 'react';
import Logo__img from '../../asset/up.png';
import s from './Logo.module.css';


const Logo = () => {
    return (
            <img src={Logo__img} alt="logo" className={s.image}/>
    )
};

export default Logo;