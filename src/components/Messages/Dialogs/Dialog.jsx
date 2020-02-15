import React from 'react';
import messageImg from './../../../asset/message.svg'
import s from './Dialog.module.css'
import UserAvatar from "../../common/userAvatar/UserAvatar";

let Dialog = (props) => {
    return (
        <div className={s.container} onClick={()=>{
            props.getListOfMessagesThunk(props.userId)

        }}>
            <div className={s.container__block}>
                <div className={s.img}>
                    {props.photos.large?<img className={s.img__OfUser} src={props.photos.large} alt="avatar"/>
                    :<UserAvatar/>}
                </div>
                <div className={s.userName}>
                <span className={s.userName__text}>
                    {props.userName}
                </span>
                </div>
            </div>


            <div className={s.container__block}>
                <div className={s.newMessage}>
                    <img src={messageImg} alt="newMessages"/>
                </div>
                <div className={s.messagesCount}>+{props.newMessagesCount}</div>
            </div>

        </div>

    )
};



export default Dialog;