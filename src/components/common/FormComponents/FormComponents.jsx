import React from "react";
import styles from "./FormComponents.module.css";
import {Field} from "redux-form";
import s from "../../Login/Login.module.css";

const FormComponent = ({input, meta, child, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={showError && styles.formControl + ' ' + styles.error}>
            <div>
                {props.children}
            </div>
        {showError && <span className={styles.error}>{showError}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormComponent {...props}><textarea {...input} {...restProps}/></FormComponent>
};
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormComponent {...props}><input {...input} {...restProps}/></FormComponent>
};

export const createField = (paceHolder, name, component, validators, props={}, text='') =>  (
    <div className={s.login__item}>
    <Field paceholder={paceHolder} name={name}
           component={component}  validate={validators}
           {...props}/> {text}
    </div>
    );


