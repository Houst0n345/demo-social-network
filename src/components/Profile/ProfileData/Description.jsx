import React from "react";
import s from './ProfileData.module.css';

const Description = (props) => {

    return (
        <div>
            <div className={s.description__list_item}>
                Full Name: {props.userData.fullName}
            </div>
            <div className={s.description__list_item}>
                Looking for a job: {props.userData.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div className={s.description__list_item}>
                About Me: {props.userData.aboutMe}
            </div>
            <div className={s.description__list_item}>
                My skills: {props.userData.lookingForAJobDescription}
            </div>
            <div>
                <span className={s.contacts}>Contacts</span>: {Object.keys(props.userData.contacts).map(a => {
                    return <Contacts key={a} contactTitle={a} contactValue={props.userData.contacts[a]}/>
            })}
            </div>
        </div>
    )
};

const Contacts = (props) => {
    return <div className={s.description__list_item}>
        {props.contactValue?props.contactTitle+': ' + props.contactValue:''}
    </div>
};

export default Description;