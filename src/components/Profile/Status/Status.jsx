import React from "react";
import s from "./Status.module.css";

class Status extends React.Component {
    state = {
        editMod: false,
        status: this.props.status
    };
    activateEditMode = () => {
        this.setState( {
            editMod: true
        });
    };
    deActivateEditMode = () => {
        this.setState( {
            editMod: false
        });
        this.props.updateStatusThunk(this.state.status);
    };

    onStatusChange = (e) => {
       this.setState({
           status: e.currentTarget.value
           }
       )
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        })
    }

    render() {

        return <div className={s.statusBlock}>
            {!this.state.editMod &&
            <div>
                <div onDoubleClick={this.activateEditMode} className={s.text}>
                    <span>Статус:</span>
                    <span>{this.props.status || '-----'}</span>
                 </div>
            </div>
            }
            {this.state.editMod &&
            <div >
                <input onChange={this.onStatusChange} autoFocus={true} value = {this.state.status} onBlur={this.deActivateEditMode}
                       className={s.input} maxLength={20}/>
            </div>
            }
        </div>
    }
}

export default Status;