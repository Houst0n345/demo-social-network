import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../../common/FormComponents/FormComponents";
import Posts from "./Posts";
import styleFor from '../../common/css/button.module.css';
import s from './UserPosts.module.css';

const UserPosts = (props) => {
    const onSubmit = (formData) => {
        props.setPost(formData.post);
        
    };

    return <div>
        <PostReduxForm onSubmit={onSubmit} posts={props.posts} src={props.src} userName={props.userName}/>
    </div>
};


const PostForm = (props) => {

    return (
        <form  onSubmit={props.handleSubmit}>
            <div className={s.form}>
                {createField('My post', 'post', Textarea, [])}
            </div>

               <button className={styleFor.button}>Sing in</button>
            <div className={s.posts__title}>My Posts</div>
            <Posts posts={props.posts} src={props.src} userName={props.userName}/>
        </form>
    )
};
const PostReduxForm = reduxForm({form: 'post'})(PostForm);



export default UserPosts;