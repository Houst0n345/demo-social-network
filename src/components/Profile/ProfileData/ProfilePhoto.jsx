import s from "./ProfileData.module.css";
import React from "react";
import UserImg from '../../../asset/userProfile.png';


const ProfilePhoto = (props) => {
    return (
            <div className={s.profileLogo}>
                <div className={s.large}>
                    <img src={props.photos.large
                        ? props.photos.large
                        : UserImg}
                         alt='user' className={s.large__photo}/>
                    <div>
                        <img className={s.small} alt='user'
                             src={props.photos.small
                                 ? props.photos.small
                                 : UserImg}/>
                    </div>
                </div>
            </div>)
            };

export default ProfilePhoto;