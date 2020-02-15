import React from 'react';
import Dialogs from "./Dialogs/Dialogs";
import s from './Messages.module.css';
import MessagesForUser from "./MessagesForUser/MessagesForUser";


let Messages = (props) => {
    return (
        <div className={s.container}>
            <div className={s.container__block}>
                {/*Отображение всех диалогов*/}
                {props.dialogs ? <Dialogs dialogs={props.dialogs}
                                          getListOfMessagesThunk={props.getListOfMessagesThunk}/> : ''}
            </div>
            <div className={s.container__block}>
                {/*Отображение сообщений*/}
                <MessagesForUser messages={props.messages} postMessageThunk={props.postMessageThunk} dialogWith={props.dialogWith}/>
            </div>

        </div>

    )
};


export default Messages;