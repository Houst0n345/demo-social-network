import s from "./ProfileData.module.css";
import React from "react";
import Preloader from "../../common/Preloader";
import Status from "../Status/Status";
import UserImg from '../../../asset/userProfile.png';


const ProfileData = (props) => {
    if (!props.userData) {
        return <Preloader/>
    }

    return (
        <div className={s.description}>
            <div className={s.profileLogo}>
                <div className={s.large}>
                    <img src={props.userData.photos.large
                        ?props.userData.photos.large
                        :UserImg}
                         alt='user'/>
                    <div>
                        <img className={s.small} alt='dog'
                             src={props.userData.photos.small
                             ?props.userData.photos.small
                             :UserImg} />
                    </div>
                </div>
            </div>
            <div className={s.description__list}>
                <Status status={props.status} updateStatusThunk={props.updateStatusThunk}/>
                <div className={s.description__item}>{props.userData.fullName}</div>
                <div>{props.userData.aboutMe}</div>
                <div>{props.userData.lookingForAJobDescription}</div>
                <div>{props.userData.lookingForAJob}</div>
                {/*вставить логику if с гифкой или чем-то подобным. Блок lookingForAJob не отображается сейчас */}
            </div>

        </div>
    )
};


export default ProfileData;