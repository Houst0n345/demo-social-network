import React from 'react';
import Dialog from "./Dialog";


let Dialogs = (props) => {
    return (
        <div>
            {/*Отображение всех диалогов*/}
            {props.dialogs ? props.dialogs.map(a => {
                return <Dialog key={a.id} userId={a.id} photos={a.photos} userName={a.userName}
                               newMessagesCount={a.newMessagesCount}
                               getListOfMessagesThunk={props.getListOfMessagesThunk}/>
            }) : ''}
        </div>
    )
};

export default Dialogs;