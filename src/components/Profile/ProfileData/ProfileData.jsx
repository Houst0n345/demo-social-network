import s from "./ProfileData.module.css";
import React, {useState} from "react";
import ProfilePhoto from "./ProfilePhoto";
import Description from "./Description";
import DescriptionForm from "./DescriptionForm";
import styleFor from '../../common/css/button.module.css';
import StatusWithHooks from "../Status/StatusWithHooks";
import {NavLink} from "react-router-dom";



const ProfileData = (props) => {
    const [editMod, setEditMod] = useState(false);
    const onSubmit = (formData) => {
        props.saveProfileData(formData).then(
            () => setEditMod(false)
        );

    };
    let myPhoto = (e) => {
        props.saveImg(e.target.files[0])
    };
    return (
        <div className={s.description}>
            <div>
                <ProfilePhoto photos={props.userData.photos}/>
            </div>

            {/*Добавление нового фото*/}
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

            <div className={s.user__info}>
                <StatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk}
                                 authUserId={props.authUserId}/>
                <div className={s.user__info}>
                    {/*показываем либо описание юзера, либо форму для заполнения*/}
                    {editMod
                        ? <DescriptionForm initialValues={props.userData} userData={props.userData}
                                           onSubmit={onSubmit}/>
                        : <Description userData={props.userData}/>}
                </div>
                {/*показываем кнопку если едит мод не включен*/}
                {!editMod ? <div className={s.description__edit}>
                    {(!props.match.params.userId)
                        ? <button onClick={() => setEditMod(!editMod)} className={styleFor.button}>Edit
                            profile</button>
                        : null
                    }
                </div> : ''}

                {/*Добавляем диолог с этим юзером на 1 место. для начала разговоро нужен либо
                добавить чат либо сделать переадресацию на страницу сообщений*/}
                {(props.match.params.userId)
                    ?
                    <NavLink to={`/messages/`} className={s.link}>
                        <button className={styleFor.button} onClick={() => props.putNewDialogThunk(props.userData.userId)}>
                            Start chatting</button>
                    </NavLink>
                    : ''}
            </div>
        </div>
    )

};


export default ProfileData;