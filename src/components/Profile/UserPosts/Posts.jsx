import React from 'react';
import UserAvatar from "../../common/userAvatar/UserAvatar";
import s from "./Posts.module.css";


const Posts = (props) => {
    return <div>
        {props.posts.map((a, b) => {
            return <div key={b} className={s.container}>
                <UserAvatar src={props.src}/>
                <div className={s.content}>
                    <div className={s.title}>
                        <span className={s.userName}>{props.userName}</span>
                    </div>
                    <div className={s.text}>{a.post}</div>
                </div>
            </div>
        })}
    </div>
};


export default Posts;