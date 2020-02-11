import React from 'react';
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormComponents/FormComponents";
import {loginThunk} from "../../Redux/authReducer";
import {connect} from "react-redux";
import styleFor from "../common/css/button.module.css";
import s from "./Login.module.css";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>


};

let maxLength32 = maxLengthCreator(32);

const LoginForm = (props) => {

    return (
        <form className={s.login} onSubmit={props.handleSubmit}>
            <span>Login:</span> {createField('Email', 'email', Input,
            [required, maxLength32])}
            <span>Password:</span> {createField('Password', 'password',
            Input, [required, maxLength32],
            {type: 'password'})}
            {createField(null, 'rememberMe', Input, null,
                {type: 'checkbox'}, 'Remember Me')}

            {/*Отоброжает capture если она есть   */}
            {props.captcha && <img src={props.captcha} alt="captcha"/>}
            {props.captcha && createField('Anti-bot symbols',
                'captcha', Input, [required])}

            {/*Отоброжает ошибку если она есть   */}
            {props.error && <div>{props.error}</div>}

            <div className={s.button}>
                <button className={styleFor.button}>Sing in</button>
            </div>
        </form>
    )
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
});

export default connect(mapStateToProps, {loginThunk})(Login);