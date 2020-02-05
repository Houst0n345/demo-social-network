import React from 'react';
import MessagesReduxForm from './MessagesReduxForm';
import Message from "./Message/Message";




let Messages = (props) => {
    let addNewMessage = (values) => {
        props.addMessage(values.message)
    };
    let message = props.messages.map(m => <Message message={m.message}/>);
    return (
        <div>
            {message}
            <MessagesReduxForm onSubmit={addNewMessage}/>
        </div>

    )
};



export default Messages;