import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormComponents/FormComponents";
import {loginThunk} from "../../Redux/authReducer";
import {connect} from "react-redux";
import styleFor from "../common/css/button.module.css";
import s from "./Login.module.css";
import {Redirect} from "react-router-dom";




const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>


};

let maxLength32 = maxLengthCreator(32);

const LoginForm = (props) => {

    return (
        <form className={s.login} onSubmit={props.handleSubmit}>
            <div className={s.login__item}>
                <Field className={s.field} placeholder={'Login'} name={'email'} component={Input} validate={[required, maxLength32]}/>
            </div>
            <div className={s.login__item}>
                <Field className={s.field} placeholder={'Password'} name={'password'} component={Input} type={'password'} validate={[required, maxLength32]}/>
            </div>
            <div className={s.login__item}>
                <Field  name={'rememberMe'} component={'input'} type={'checkbox'}/>
                <span>Remember Me</span>
            </div>
            {props.error && <div>{props.error}</div>}
            <div className={s.button}>
                <button className={styleFor.button}>Sing in</button>
            </div>

        </form>
)};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginThunk})(Login);