import React from "react";

const Description = (props) => {

    return (
        <div>
            <div>
               Full Name: {props.userData.fullName}
            </div>
            <div>
                Looking for a job: {props.userData.lookingForAJob? 'Yes': 'No'}
            </div>
            <div>
                About Me: {props.userData.aboutMe}
            </div>
            <div>
                My skills: {props.userData.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.userData.contacts).map(a=> {
                    return <Contacts key={a} contactTitle={a} contactValue= {props.userData.contacts[a]}/>
            })}
            </div>
        </div>
    )
};



export const Contacts = (props) => {
        return <div>
           {props.contactTitle}: {props.contactValue}
        </div>
};

export default Description;