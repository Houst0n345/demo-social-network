import React, {useState} from "react";
import s from "./Status.module.css";

const StatusWithHooks = (props) => {
    let [editMod,setEditMod] = useState(false);
    let[status,setStatus] = useState(props.status);

    let activateEditMode= () => setEditMod(!editMod);
    let deActivateEditMode= (e) => {
        setEditMod(!editMod);
        props.updateStatusThunk(e.currentTarget.value);
    };

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    };

    return <div className={s.statusBlock}>
        {!editMod &&
        <div>
            <div onClick={activateEditMode} className={s.text}>
                <span>Status:</span>
                <span>{props.status || '-----'}</span>
            </div>
        </div>
        }
        {editMod &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} value={status}
                   onBlur={deActivateEditMode}
                   className={s.input} maxLength={20}/>
        </div>
        }
    </div>
};

export default StatusWithHooks;