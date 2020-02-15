import React from 'react';
import Message from "./Message";
import MessagesReduxForm from "../MessagesReduxForm";
import  s from  "./Message.module.css";



let MessagesForUser = (props) => {
    const onSubmit = (formData) => {
        props.postMessageThunk(props.dialogWith, formData.message);
    };

    return (
        <div>
            <div className={s.container}>
                {props.messages.items.length? props.messages.items.map(a=>{
                    return <Message key={a.id} messageText={a.body} senderName={a.senderName} addedAt={a.addedAt} viewed={a.viewed}/>
                }): ''}
            </div>
            <MessagesReduxForm onSubmit={onSubmit}/>
        </div>

    )
};




export default MessagesForUser;