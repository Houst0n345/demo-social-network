import React from "react";
import s from './Message.module.css';

let Message = (props) => {

    // senderName addedAt viewed
    return (
        <div className={s.message}>
            <div className={s.message__block}>
                <div className={s.message__sender}>
                    <div>{props.senderName}</div>

                </div>
                {props.addedAt? <span className={s.message__time}>{props.addedAt.slice(11,19)}</span>:''}
            </div>


            <div className={s.message__text}>{props.messageText}</div>
        </div>

    )
};

export default Message;