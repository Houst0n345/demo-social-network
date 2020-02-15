import React from 'react';
import preloader from '../../asset/preloader.svg';
import s from './Preloader.module.css';


const Preloader = (props) => {
    return (
        <div>
            <img className={s.preloader} src={preloader} alt="preloader"/>
        </div>
    )
};

export default Preloader;