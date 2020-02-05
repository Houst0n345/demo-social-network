import React from 'react';
import Post from "./Post/Post";
import styleFor from '../../common/css/button.module.css';
import s from './UserPosts.module.css';


const UserPosts = React.memo(props => {
    let newPost = props.postData.map(p => <Post messagePost ={p.messagePost} like={p.like}/>);
    let newPostMessage = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };

    let onChangePost =  () => {
        let text  = newPostMessage.current.value;
        props.onChangePost(text);
    };

    return (
        <div className={s.post}>
        <textarea onChange = {onChangePost} ref = {newPostMessage} value={props.newPostText}
        className={s.post__text} placeholder="Что у Вас нового?" maxLength={100} cols={40}
        rows={3}/>
        <div className={s.post__button}>
            <button onClick={onAddPost} className={styleFor.button}>submit</button>
        </div>
        {newPost}
    </div>);
});

export default UserPosts;
