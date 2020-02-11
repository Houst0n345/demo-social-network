import React from "react";
import {createField, Input, Textarea} from "../../common/FormComponents/FormComponents";
import {reduxForm} from "redux-form";
import {Contacts} from "./Description";
import styleFor from '../../common/css/button.module.css';
import s from './ProfileData.module.css';



const DescriptionForm = ({userData,handleSubmit,error}) => {

    return (
            <form  onSubmit={handleSubmit}>
                {error && <div>{error}</div>}
                <div>
                    <div>Full Name</div>
                    {createField('Full Name', 'fullName', Input, [])}
                    <div>Looking for a job</div>
                    {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
                    <div>My skills</div>
                    {createField('My professional skills', 'lookingForAJobDescription', Textarea,
                        [])}
                    <div> About Me</div>
                    {createField('About Me', 'aboutMe', Textarea, [])}
                </div>

                    <b>Contacts</b>: {Object.keys(userData.contacts).map(a => {
                    return <Contacts key={a} contactTitle={a}
                                     contactValue={createField(''+a,'contacts.'+a,Input,[])}/>


                })}
                <div className={s.button}>
                    <button className={styleFor.button}>Save</button>
                </div>

            </form>


)
};

const DescriptionFormReduxForm =reduxForm({form: 'profile'})(DescriptionForm);

export default DescriptionFormReduxForm;