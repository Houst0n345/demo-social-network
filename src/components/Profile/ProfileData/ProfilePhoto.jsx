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
                </div>
            </div>)
            };

export default ProfilePhoto;