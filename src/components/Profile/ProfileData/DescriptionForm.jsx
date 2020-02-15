import React from "react";
import {createField, Input, Textarea} from "../../common/FormComponents/FormComponents";
import {reduxForm} from "redux-form";
import styleFor from '../../common/css/button.module.css';
import s from './ProfileData.module.css';



const DescriptionForm = ({userData,handleSubmit,error}) => {
    return (
            <form className={s.user__info} onSubmit={handleSubmit}>
                {error && <div>{error}</div>}
                <div className={s.form__width}>
                    <div className={s.description__list_item}>Full Name</div>
                    {createField('Full Name', 'fullName', Input, [])}
                    <div className={s.description__list_item}>Looking for a job</div>
                    {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
                    <div className={s.description__list_item}>My skills</div>
                    {createField('My professional skills', 'lookingForAJobDescription', Textarea,
                        [])}
                    <div className={s.description__list_item}> About Me</div>
                    {createField('About Me', 'aboutMe', Textarea, [])}
                </div>

                    <span className={s.contacts}>Contacts</span>: {Object.keys(userData.contacts).map(a => {
                    return <ContactsForm key={a}
                                     contactValue={createField('https://'+a+'.com','contacts.'+a,Input,[])}/>


                })}
                <div className={s.button}>
                    <button className={styleFor.button}>Save</button>
                </div>

            </form>


)
};

const ContactsForm = (props) => {
    return <div className={s.form__width}>
       {props.contactValue}
    </div>
};

const DescriptionFormReduxForm =reduxForm({form: 'profile'})(DescriptionForm);

export default DescriptionFormReduxForm;