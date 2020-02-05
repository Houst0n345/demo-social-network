import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

        <div className = {s.item}>
            <img alt = 'avatar' src = 'https://upload.wikimedia.org/wikipedia/id/d/d5/Aang_.jpg'></img>
            <div>{props.messagePost}</div>
            <span> likes {props.like}</span>
        </div>
    )
}

export default Post;