import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormComponents/FormComponents";
import styleFor from "../common/css/button.module.css";
import s from "./MessagesReduxForm.module.css";

let maxLength500 = maxLengthCreator(500);
let MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field placeholder='write message...' className={s.textArea} name='message'
                   component={Textarea} validate={[required, maxLength500]}/>
            <div className={s.button}>
                <button className={styleFor.button}>Send</button>
            </div>
        </form>
    )
};

let MessagesReduxForm = reduxForm({form: 'messages'})(MessagesForm);


export default MessagesReduxForm;






