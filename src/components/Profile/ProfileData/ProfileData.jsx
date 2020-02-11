import s from "./ProfileData.module.css";
import React, {useState} from "react";
import Preloader from "../../common/Preloader";
import ProfilePhoto from "./ProfilePhoto";
import Description from "./Description";
import DescriptionForm from "./DescriptionForm";
import Status from "../Status/Status";
import styleFor from '../../common/css/button.module.css';




const ProfileData = (props) => {
    const [editMod,setEditMod] = useState(false);
    const onSubmit = (formData) => {
        props.saveProfileData(formData).then(
            ()=>setEditMod(false)
        );

    };
    if (!props.userData) {
        return <Preloader/>
    }
    let myPhoto = (e) => {
        props.saveImg(e.target.files[0])
    };
    return (
        <div className={s.description}>
            <div>
                <ProfilePhoto photos={props.userData.photos}/>

            </div>
            <div>
                {(props.authUserId === props.userData.userId)
                    ? <div className={s.input__block}>
                        <label htmlFor="file-input" className={s.input__label}>
                            Change Photo
                        </label>
                        <input className={s.input_none} id={"file-input"} type={"file"} onChange={myPhoto}/>
                    </div>
                    : null
                }
            </div>
            <div >
                <Status {...props}/>
                <div className={s.description__edit}>
                    {(!props.match.params.userId)
                        ?<button onClick={()=>setEditMod(!editMod)} className={styleFor.button}>Edit profile</button>
                        : null
                    }
                </div>
                {/*проверка  юзер===авторизованный юзер*/}
                {editMod
                    ?<DescriptionForm initialValues={props.userData} userData={props.userData} onSubmit={onSubmit}/>
                    : <Description status={props.status} updateStatusThunk={props.updateStatusThunk}
                                   userData={props.userData} authUserId={props.authUserId}/>}
            </div>



        </div>
    )
};


export default ProfileData;