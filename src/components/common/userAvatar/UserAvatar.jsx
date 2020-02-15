import React from 'react';
import s from './UserAvatar.module.css'
import userAvatar from '../../../asset/User.png'

const UserAvatar = (props) => {
    return (<span>
        {props.src ?<img src={props.src} alt="userAvatar" className={s.image}/>
            :<img src={userAvatar} alt="userAvatar" className={s.image}/>}
    </span>


    )
};

export default UserAvatar;